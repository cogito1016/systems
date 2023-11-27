import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session, { CookieOptions } from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const cookieOption: CookieOptions = {
    sameSite: 'none',
  };
  const sessionOption = {
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: cookieOption,
  };
  app.enableCors({
    credentials: true,
  });
  app.use(session(sessionOption));
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
