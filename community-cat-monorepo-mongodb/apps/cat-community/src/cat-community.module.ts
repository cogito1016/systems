import { Module } from '@nestjs/common';
import { CatCommunityController } from './cat-community.controller';
import { CatCommunityService } from './cat-community.service';

@Module({
  imports: [],
  controllers: [CatCommunityController],
  providers: [CatCommunityService],
})
export class CatCommunityModule {}
