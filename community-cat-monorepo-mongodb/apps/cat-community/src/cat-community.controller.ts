import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CatCommunityService } from './cat-community.service';
import { JwtAuthGuard } from './jwt/jwt.guard';

@Controller('cat')
export class CatCommunityController {
  constructor(private readonly catCommunityService: CatCommunityService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getCats(@Req() req: Request): string {
    // console.log(req);
    return '고양이정보를 가져옵니다. 회원만 가져올 수 있습니다.';
  }
}
