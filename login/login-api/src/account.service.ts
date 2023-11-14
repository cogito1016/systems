import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { createHmac } from 'crypto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async signIn(
    accountWhereInput: Prisma.AccountWhereInput,
  ): Promise<Account | HttpException> {
    const account = await this.account(accountWhereInput);

    if (!account) {
      throw new HttpException(
        '존재하지 않는 계정입니다',
        HttpStatus.BAD_REQUEST,
      );
    }

    return account;
  }

  _getHashedPassword(password: string): string {
    const secret = process.env.SECRET_KEY;
    const hashed = createHmac('sha256', secret).update(password).digest('hex');

    return hashed;
  }

  async createAccount(account: Prisma.AccountCreateInput): Promise<Account> {
    //ID, PW 검증 로직 추가
    this._validateIdAndPw(account.user_id, account.password);

    account.password = this._getHashedPassword(account.password);

    const accountData: Prisma.AccountCreateInput = {
      ...account,
      member_code: this._makeMemberCode(),
    };

    return this.prisma.account.create({
      data: accountData,
    });
  }

  _validateIdAndPw(id: string, password: string): boolean {
    if (!id || !password) {
      throw new HttpException(
        '유효하지않은 ID 또는 PW입니다',
        HttpStatus.BAD_REQUEST,
      );
    }

    //ID
    const account = this.account({ user_id: id });
    if (account) {
      throw new ConflictException('이미 존재하는 ID입니다');
    }

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
