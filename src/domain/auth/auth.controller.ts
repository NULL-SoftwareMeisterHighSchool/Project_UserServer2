import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  LoginRequestDto,
  RefreshRequestDto,
  StudentSignupRequestDto,
} from './dto/request';
import { LoginService, LogoutService, StudentSignupService } from './services';
import { LoginResponseDto } from './dto/response';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly studentSignupService: StudentSignupService,
    private readonly loginService: LoginService,
    private readonly logoutService: LogoutService,
  ) {}

  @Post('signup/student')
  async signup(@Body() request: StudentSignupRequestDto): Promise<void> {
    return await this.studentSignupService.execute(request);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() request: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.loginService.execute(request);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Body() request: RefreshRequestDto): Promise<void> {
    return await this.logoutService.execute(request);
  }
}
