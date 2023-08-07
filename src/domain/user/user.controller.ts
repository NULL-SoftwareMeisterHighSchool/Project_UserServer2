import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
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
  UpdatePasswordService,
  UpdateUserService,
} from './services';
import { UpdateMeRequestDto, UpdatePasswordRequestDto } from './dto/request';

@Controller('users')
export class UserController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly getMyStatService: GetMyStatService,
    private readonly updatePasswordService: UpdatePasswordService,
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

  @Patch('me/edit-password')
  @UseGuards(AuthGuard)
  async updatePassword(
    @GetUser() userInfo: UserInfo,
    @Body() request: UpdatePasswordRequestDto,
  ): Promise<void> {
    return await this.updatePasswordService.execute(userInfo.id, request);
  }
}
