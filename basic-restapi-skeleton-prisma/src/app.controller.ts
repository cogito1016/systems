import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Team as TeamModel, Member as MemberModel } from '@prisma/client';
import { MemberService } from 'member.service';
import { TeamService } from 'team.service';

@Controller()
export class AppController {
  constructor(
    private readonly memberService: MemberService,
    private readonly teamService: TeamService,
  ) {}

  @Get('team/:idx')
  async getTeamById(@Param('idx') idx: string): Promise<TeamModel | null> {
    return this.teamService.team({ idx: Number(idx) });
  }

  @Post('team')
  async signTeam(
    @Body()
    teamData: {
      team_code: string;
      name: string;
      group: string;
    },
  ): Promise<TeamModel | null> {
    return this.teamService.createteam(teamData);
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
