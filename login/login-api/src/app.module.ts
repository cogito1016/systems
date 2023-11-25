import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MemberService } from './member.service';
import { AccountService } from './account.service';
import { LocalStrategy } from './auth/local.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    MemberService,
    AccountService,
    LocalStrategy,
  ],
})
export class AppModule {}
