import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  LoginRequestDto,
  RefreshRequestDto,
  SendMailRequestDto,
  StudentSignupRequestDto,
  VerifyRequestDto,
} from './dto/request';
import {
  LoginService,
  LogoutService,
  RefreshService,
  ResetPasswordService,
  SendMailService,
  StudentSignupService,
  VerifyService,
} from './services';
import {
  LoginResponseDto,
  PasswordResponseDto,
  RefreshResponseDto,
} from './dto/response';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly studentSignupService: StudentSignupService,
    private readonly loginService: LoginService,
    private readonly logoutService: LogoutService,
    private readonly refreshService: RefreshService,
    private readonly sendMailService: SendMailService,
    private readonly verifyService: VerifyService,
    private readonly resetPasswordService: ResetPasswordService,
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

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  async verify(@Body() request: VerifyRequestDto): Promise<void> {
    return await this.verifyService.execute(request);
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async sendRefreshMail(
    @Body() request: VerifyRequestDto,
  ): Promise<PasswordResponseDto> {
    return await this.resetPasswordService.execute(request);
  }
}
