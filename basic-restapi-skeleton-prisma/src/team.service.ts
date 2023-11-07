import { Injectable } from '@nestjs/common';
import { Team, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async team(
    teamWhereUniqueInput: Prisma.TeamWhereUniqueInput,
  ): Promise<Team | null> {
    return this.prisma.team.findUnique({
      where: teamWhereUniqueInput,
    });
  }

  async teams(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TeamWhereUniqueInput;
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput;
  }): Promise<Team[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.team.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createteam(data: Prisma.TeamCreateInput): Promise<Team> {
    return this.prisma.team.create({
      data,
    });
  }

  async updateteam(params: {
    where: Prisma.TeamWhereUniqueInput;
    data: Prisma.TeamUpdateInput;
  }): Promise<Team> {
    const { where, data } = params;
    return this.prisma.team.update({
      data,
      where,
    });
  }

  async deleteteam(where: Prisma.TeamWhereUniqueInput): Promise<Team | null> {
    return this.prisma.team.delete({
      where,
    });
  }
}
