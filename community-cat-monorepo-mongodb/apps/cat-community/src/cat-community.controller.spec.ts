import { Test, TestingModule } from '@nestjs/testing';
import { CatCommunityController } from './cat-community.controller';
import { CatCommunityService } from './cat-community.service';

describe('CatCommunityController', () => {
  let catCommunityController: CatCommunityController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatCommunityController],
      providers: [CatCommunityService],
    }).compile();

    catCommunityController = app.get<CatCommunityController>(CatCommunityController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(catCommunityController.getHello()).toBe('Hello World!');
    });
  });
});
