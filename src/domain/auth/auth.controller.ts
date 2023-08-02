import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto, StudentSignupRequestDto } from './dto/request';
import { LoginService, StudentSignupService } from './services';
import { LoginResponseDto } from './dto/response';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly studentSignupService: StudentSignupService,
    private readonly loginService: LoginService,
  ) {}

  @Post('signup/student')
  async signup(@Body() request: StudentSignupRequestDto): Promise<void> {
    return await this.studentSignupService.execute(request);
  }

  @Post('login')
  async login(@Body() request: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.loginService.execute(request);
  }
}
