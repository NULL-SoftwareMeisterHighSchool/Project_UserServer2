import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import { GetUserResponseDto } from './dto/response';
import { GetUserService } from './services';

@Controller('users')
export class UserController {
  constructor(private readonly getUserService: GetUserService) {}

  @Get(':userID')
  async getUser(
    @Param('userID', ParseIntPipe) userID: number,
  ): Promise<GetUserResponseDto> {
    return this.getUserService.execute(userID);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  async getMe(@GetUser() userInfo: UserInfo): Promise<GetUserResponseDto> {
    return this.getUserService.execute(userInfo.id);
  }

  @Get('me/tiny')
  @UseGuards(AuthGuard)
  getMeTiny(@GetUser() userInfo: UserInfo): UserInfo {
    return userInfo;
  }
}
