import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('test')
  getHello(): Promise<Account | null> {
    return this.accountService.getTest();
  }

  @UseGuards(AuthGuard('local'))
  @Post('sign-in')
  async signIn(
    @Body()
    accountData: {
      password: string;
      user_id: string;
    },
  ): Promise<object | null | string> {
    return this.accountService.signIn(accountData);
  }
}
