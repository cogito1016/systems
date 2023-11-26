import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from '@prisma/client';
import { LocalAuthGuard } from 'auth/local.auth.guard';
import { AuthenticatedGuard } from 'auth/authenticated.guard';
import { AccountRequestInterface } from './interface/account.request.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('test')
  getHello(): Promise<Account | null> {
    return this.accountService.getTest();
  }

  @UseGuards(LocalAuthGuard)
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

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  async getProtected(
    @Request() req: AccountRequestInterface,
  ): Promise<object | null | string> {
    return { user_id: req.user_id, password: req.password };
  }

  @Get('sign-out')
  logout(@Request() request: any): any {
    request.session.destroy();
    return { message: '로그아웃 되었습니다' };
  }
}
