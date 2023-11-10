import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Member as MemberModel } from '@prisma/client';
import { MemberService } from './member.service';
import { SecurityService } from './security.service';

@Controller()
export class AppController {
  constructor(
    private readonly memberService: MemberService,
    private readonly securityService: SecurityService,
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

  @Get('password/:password')
  async getHashedPassword(
    @Param('password') password: string,
  ): Promise<object | null> {
    return this.securityService.getHashedPassword(password);
  }
}
