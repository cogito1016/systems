import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from '@app/user/dto/user.request.dto';
import { UserService } from '@app/user';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(body: UserRequestDto) {
    const { email, name, password } = body;
    const isExist = await this.userService.isExistByEmail(email);

    if (isExist) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다.');
    }

    const user = await this.userService.createUser(email, name, password);

    return user.readOnlyData;
  }
}
