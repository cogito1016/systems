import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// extends AuthGuard('jwt')는 jwt.strategy.ts에서 JwtStrategy를 상속받은 JwtAuthGuard를 사용한다는 의미이다.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
