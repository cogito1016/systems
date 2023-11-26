import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from '@prisma/client';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('test')
  getHello(): Promise<Account | null> {
    return this.accountService.getTest();
  }
}
