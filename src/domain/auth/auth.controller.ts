import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  LoginRequestDto,
  RefreshRequestDto,
  SendMailRequestDto,
  StudentSignupRequestDto,
} from './dto/request';
import {
  LoginService,
  LogoutService,
  RefreshService,
  SendMailService,
  StudentSignupService,
} from './services';
import { LoginResponseDto, RefreshResponseDto } from './dto/response';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly studentSignupService: StudentSignupService,
    private readonly loginService: LoginService,
    private readonly logoutService: LogoutService,
    private readonly refreshService: RefreshService,
    private readonly sendMailService: SendMailService,
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

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Body() request: RefreshRequestDto,
  ): Promise<RefreshResponseDto> {
    return await this.refreshService.execute(request);
  }

  @Post('send-mail')
  @HttpCode(HttpStatus.OK)
  async sendMail(@Body() request: SendMailRequestDto): Promise<void> {
    return await this.sendMailService.execute(request);
  }
}
