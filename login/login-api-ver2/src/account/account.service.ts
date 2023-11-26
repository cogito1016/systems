import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Account, Prisma } from '@prisma/client';
import { createHmac } from 'crypto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  getTest(): Promise<Account | null> {
    return this.account({ idx: 37 });
  }

  async account(
    accountWhereInput: Prisma.AccountWhereInput,
  ): Promise<Account | null> {
    return this.prisma.account.findFirst({
      where: accountWhereInput,
    });
  }

  _getHashedPassword(password: string): string {
    //TODO: secret key가 없을 경우, 임시로 설정한 값으로 대체하는 로직이 이게 최선인가?
    const secret =
      this.configService.get<string>('PASSWORD_SECRET_KEY') || 'temp';
    const hashed = createHmac('sha256', secret).update(password).digest('hex');

    return hashed;
  }

  async signIn(
    accountWhereInput: Prisma.AccountWhereInput,
  ): Promise<Account | HttpException> {
    const password = accountWhereInput.password;
    if (!password) {
      throw new HttpException(
        '비밀번호를 입력해주세요(account_service)',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = this._getHashedPassword(password.toString());

    const accountWhereInputWithHashedPassword: Prisma.AccountWhereInput = {
      ...accountWhereInput,
      password: hashedPassword,
    };

    const account = await this.account(accountWhereInputWithHashedPassword);

    if (!account) {
      throw new HttpException(
        '존재하지 않는 계정입니다(account_service)',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this._updateThoughtCount(account.idx);

    return account;
  }

  _updateThoughtCount(idx: number): Promise<Account> {
    return this.prisma.account.update({
      where: { idx },
      data: {
        thoughtCount: {
          increment: 1,
        },
      },
    });
  }
}
