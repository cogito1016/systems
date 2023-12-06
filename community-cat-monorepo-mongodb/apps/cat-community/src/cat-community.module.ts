import { Module } from '@nestjs/common';
import { CatCommunityController } from './cat-community.controller';
import { CatCommunityService } from './cat-community.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserModule } from '@app/user';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    UserModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [CatCommunityController],
  providers: [CatCommunityService, JwtStrategy],
})
export class CatCommunityModule {}
