import {Controller, Get, Post} from '@nestjs/common';
import { CatCommunityService } from './cat-community.service';

@Controller()
export class CatCommunityController {
  constructor(private readonly catCommunityService: CatCommunityService) {}

  @Get()
  getHello(): string {
    return this.catCommunityService.getHello();
  }
}
