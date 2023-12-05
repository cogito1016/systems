import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRequestDto } from '@app/user/dto/user.request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signUp(@Body() body: UserRequestDto) {
    return await this.authService.signUp(body);
  }

  @Post('login')
  async login() {
    return 'Login';
  }

  @Post('logout')
  async logout() {
    return 'Logout';
  }
}
