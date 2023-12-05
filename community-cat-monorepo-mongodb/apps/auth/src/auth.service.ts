import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from '@app/user/dto/user.request.dto';
import { UserRepository } from '@app/user/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(body: UserRequestDto) {
    const { email, name, password } = body;
    const isExist = await this.userRepository.isExistByEmail(email);

    if (isExist) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다.');
    }

    const user = await this.userRepository.createUser(email, name, password);

    return user.readOnlyData;
  }
}
