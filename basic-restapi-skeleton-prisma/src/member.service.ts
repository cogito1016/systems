import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}
}
