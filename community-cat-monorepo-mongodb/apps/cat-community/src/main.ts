import { NestFactory } from '@nestjs/core';
import { CatCommunityModule } from './cat-community.module';
import { ValidationPipe } from '@nestjs/common';
import expressBasicAuth from 'express-basic-auth';
import process from 'process';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    CatCommunityModule,
  );
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    credentials: true,
  });

  //http://localhost:3002/media/cat/aaa.jpg
  app.useStaticAssets(path.join(__dirname, '..', 'upload'), {
    prefix: '/media',
  });

  //express-basic-auth
  app.use(
    ['/docs', '/docs-json'],
    expressBasicAuth({
      challenge: true,
      users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD },
    }),
  );

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Community API')
    .setDescription('고뮤니티를 위한 컨텐츠API')
    .setVersion('1.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3002);
}
bootstrap();
