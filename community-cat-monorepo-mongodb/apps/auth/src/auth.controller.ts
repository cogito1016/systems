import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRequestDto } from '@app/user/dto/user.request.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserResponseDto } from '@app/user/dto/user.response.dto';
import { LoginRequestDto } from './dto/login.request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 500,
    description: '서버 에러',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserResponseDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: UserRequestDto) {
    return await this.authService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login(@Body() body: LoginRequestDto) {
    return await this.authService.signIn(body);
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  async logout() {
    return 'Logout';
  }
}
