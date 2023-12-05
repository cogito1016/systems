import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post()
  async signUp() {
    return 'SignUp';
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
