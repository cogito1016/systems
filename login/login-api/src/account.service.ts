import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(
    account: Prisma.AccountCreateInput,
  ): Promise<Account | string | HttpException> {
    //ID, PW 검증 로직 추가
    const validResult = this._validateIdAndPw(
      account.user_id,
      account.password,
    );

    if (
      typeof validResult === 'string' ||
      validResult instanceof HttpException
    ) {
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

  _validateIdAndPw(
    id: string,
    password: string,
  ): string | boolean | HttpException {
    if (!id || !password) {
      return new HttpException(
        'ID또는 PW가 유효하지 않습니다.',
        HttpStatus.FORBIDDEN,
      );
    }

    //ID
    const account = this.account({ user_id: id });
    if (account) {
      return new HttpException('이미 존재하는 ID입니다', HttpStatus.FORBIDDEN);
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
