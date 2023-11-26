import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { PrismaService } from 'prisma/prisma.service';
import { LocalStrategy } from 'auth/local.strategy';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService, LocalStrategy],
})
export class AccountModule {}
