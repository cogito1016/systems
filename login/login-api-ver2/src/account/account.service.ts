import { Injectable } from '@nestjs/common';
import { Account, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

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
}
