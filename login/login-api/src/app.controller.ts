import { Body, Controller, Get, Post } from '@nestjs/common';
import { Member as MemberModel } from '@prisma/client';
import { MemberService } from './member.service';
import { AccountService } from './account.service';

@Controller()
export class AppController {
  constructor(
    private readonly memberService: MemberService,
    private readonly accountService: AccountService,
  ) {}

  @Get()
  getHello(): string {
    return 'Login System';
  }

  @Get('member')
  async getMember(): Promise<MemberModel[]> {
    return this.memberService.members({});
  }

  @Post('member')
  async signMember(
    @Body()
    memberData: {
      member_code: string;
      team_code: string;
      name: string;
      address: string;
      phone_number: string;
      level: number;
    },
  ): Promise<MemberModel | null> {
    return this.memberService.createMember(memberData);
  }

  @Post('sign-up')
  async sign(
    @Body()
    signUpData: {
      password: string;
      user_id: string;
      address: string;
      phone_number: string;
      name: string;
    },
  ): Promise<object | null | string> {
    const accountData = {
      password: signUpData.password,
      user_id: signUpData.user_id,
    };
    const userAccount = await this.accountService.createAccount(accountData);

    const memberData = {
      member_code: userAccount.member_code,
      team_code: null,
      name: signUpData.name,
      address: signUpData.address,
      phone_number: signUpData.phone_number,
      level: 1,
    };
    return await this.memberService.createMember(memberData);
  }

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
