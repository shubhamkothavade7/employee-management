import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 🔑 Login API
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log("enter in the auth controller");
    return this.authService.login(loginUserDto);
  }
}
