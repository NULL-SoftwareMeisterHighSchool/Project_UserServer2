import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import { GetMyStatResponseDto, GetUserResponseDto } from './dto/response';
import {
  GetMyStatService,
  GetUserService,
  UpdateUserService,
} from './services';
import { UpdateMeRequestDto } from './dto/request';

@Controller('users')
export class UserController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly getMyStatService: GetMyStatService,
  ) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getMe(@GetUser() userInfo: UserInfo): Promise<GetUserResponseDto> {
    return await this.getUserService.execute(userInfo.id);
  }

  @Put('me')
  @UseGuards(AuthGuard)
  async updateMe(
    @GetUser() userInfo: UserInfo,
    @Body() request: UpdateMeRequestDto,
  ): Promise<void> {
    return await this.updateUserService.execute(userInfo.id, request);
  }

  @Get(':userID')
  async getUser(
    @Param('userID', ParseIntPipe) userID: number,
  ): Promise<GetUserResponseDto> {
    return await this.getUserService.execute(userID);
  }

  @Get('me/tiny')
  @UseGuards(AuthGuard)
  getMeTiny(@GetUser() userInfo: UserInfo): UserInfo {
    return userInfo;
  }

  @Get('me/stat')
  @UseGuards(AuthGuard)
  async getMyStat(
    @GetUser() userInfo: UserInfo,
  ): Promise<GetMyStatResponseDto> {
    return await this.getMyStatService.execute(userInfo.id);
  }
}
