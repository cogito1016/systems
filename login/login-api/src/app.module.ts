import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MemberService } from './member.service';
import { SecurityService } from './security.service';
import { AccountService } from './account.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    MemberService,
    SecurityService,
    AccountService,
  ],
})
export class AppModule {}