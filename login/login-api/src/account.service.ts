import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(
    account: Prisma.AccountCreateInput,
  ): Promise<Account | HttpException> {
    //ID, PW 검증 로직 추가
    const validResult = this._validateIdAndPw(
      account.user_id,
      account.password,
    );

    if (validResult instanceof HttpException) {
      return validResult;
    }

    const accountData: Prisma.AccountCreateInput = {
      ...account,
      member_code: this._makeMemberCode(),
    };

    return this.prisma.account.create({
      data: accountData,
    });
  }

  _validateIdAndPw(id: string, password: string): HttpException | boolean {
    if (!id || !password) {
      return new HttpException(
        '유효하지않은 ID 또는 PW입니다',
        HttpStatus.BAD_REQUEST,
      );
    }

    //ID
    const account = this.account({ user_id: id });
    if (account) {
      return new HttpException('이미 존재하는 ID입니다', HttpStatus.CONFLICT);
    }

    //PW
    //TODO: PW 규칙 정의 시 추가

    return true;
  }

  async account(
    accountWhereInput: Prisma.AccountWhereInput,
  ): Promise<Account | null> {
    return this.prisma.account.findFirst({
      where: accountWhereInput,
    });
  }

  _makeMemberCode(): string {
    const memberCode = `m${new Date().getTime()}${Math.floor(
      Math.random() * 100,
    )}`;

    return memberCode;
  }
}
