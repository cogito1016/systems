import { Injectable } from '@nestjs/common';
import { UserRequestDto } from '@app/user/dto/user.request.dto';

@Injectable()
export class AuthService {
  signUp(body: UserRequestDto) {
    return 'Hello Signup';
  }
}
