import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from '@app/user/dto/user.request.dto';
import { UserRepository } from '@app/user/user.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(body: UserRequestDto) {
    const { email, name, password } = body;
    const isExist = await this.userRepository.isExistByEmail(email);

    if (isExist) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다.');
    }

    const user = await this.userRepository.createUser(email, name, password);

    return user.readOnlyData;
  }

  async signIn(data: LoginRequestDto) {
    const { email, password } = data;
    const user = await this.userRepository.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const payload = { email: user.email, sub: user._id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
