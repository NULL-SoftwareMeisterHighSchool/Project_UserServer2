import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';

@Controller('users')
export class UserController {
  constructor() {}

  @Get('me/tiny')
  @UseGuards(AuthGuard)
  getMe(@GetUser() userInfo: UserInfo): UserInfo {
    return userInfo;
  }
}
