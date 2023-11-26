import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { PrismaService } from 'prisma/prisma.service';
import { LocalStrategy } from 'auth/local.strategy';
import { SessionSerializer } from 'auth/session.serializer';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ session: true })],
  controllers: [AccountController],
  providers: [AccountService, PrismaService, LocalStrategy, SessionSerializer],
})
export class AccountModule {}
