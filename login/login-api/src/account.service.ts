import { Injectable } from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(
    account: Prisma.AccountCreateInput,
  ): Promise<Account | string> {
    //ID, PW 검증 로직 추가
    if (!this._validateIdAndPw(account.user_id, account.password)) {
      return 'ID또는 PW가 유효하지 않습니다.';
    }

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
      return false;
    }

    //ID
    const account = this.account({ user_id: id });
    if (account) {
      return false;
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
