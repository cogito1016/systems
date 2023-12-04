import { NestFactory } from '@nestjs/core';
import { CatCommunityModule } from './cat-community.module';

async function bootstrap() {
  const app = await NestFactory.create(CatCommunityModule);
  await app.listen(3000);
}
bootstrap();
