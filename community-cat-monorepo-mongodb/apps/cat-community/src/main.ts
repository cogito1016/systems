import { NestFactory } from '@nestjs/core';
import { CatCommunityModule } from './cat-community.module';
import { ValidationPipe } from '@nestjs/common';
import expressBasicAuth from 'express-basic-auth';
import process from 'process';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CatCommunityModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    credentials: true,
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
