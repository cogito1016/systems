import { Injectable } from '@nestjs/common';

@Injectable()
export class CatCommunityService {
  getHello(): string {
    return 'Hello World!';
  }
}
