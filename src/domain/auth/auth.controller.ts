import { Body, Controller, Post } from '@nestjs/common';
import { StudentSignupRequestDto } from './dto/request';
import { StudentSignupService } from './services';

@Controller('auth')
export class AuthController {
  constructor(private readonly studentSignupService: StudentSignupService) {}

  @Post('signup/student')
  async signup(@Body() request: StudentSignupRequestDto): Promise<void> {
    return await this.studentSignupService.execute(request);
  }
}
