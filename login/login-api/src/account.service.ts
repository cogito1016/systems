import { Injectable } from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(account: Prisma.AccountCreateInput): Promise<Account> {
    const accountData: Prisma.AccountCreateInput = {
      ...account,
      member_code: this._makeMemberCode(),
    };

    return this.prisma.account.create({
      data: accountData,
    });
  }

  _makeMemberCode(): string {
    //m으로시작하고, 그다음에는 YYYYMMDDHHMMSS 포멧의 날짜 숫자가 오고, 그 다음에는 char(50)에 부합하는 랜덤한 숫자가 오는 문자열을 리턴한다.
    const memberCode = `m${new Date().getTime()}${Math.floor(
      Math.random() * 100,
    )}`;

    return memberCode;
  }
}
