import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MemberService } from 'member.service';
import { TeamService } from 'team.service';
import { PrismaService } from 'prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, MemberService, TeamService, PrismaService],
})
export class AppModule {}
