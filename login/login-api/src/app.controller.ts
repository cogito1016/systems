import { Body, Controller, Get, Post } from '@nestjs/common';
import { Member as MemberModel } from '@prisma/client';
import { MemberService } from './member.service';

@Controller()
export class AppController {
  constructor(private readonly memberService: MemberService) {}

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
}
