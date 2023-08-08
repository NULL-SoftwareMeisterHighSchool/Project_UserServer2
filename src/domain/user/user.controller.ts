import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Patch,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import {
  GetMyStatResponseDto,
  GetRankResponseDto,
  GetUserResponseDto,
} from './dto/response';
import {
  GetMyStatService,
  GetRankService,
  GetUserService,
  UpdatePasswordService,
  UpdateUserService,
  WithdrawService,
} from './services';
import { UpdateMeRequestDto, UpdatePasswordRequestDto } from './dto/request';
import { SchoolType } from './enums';

@Controller('users')
export class UserController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly getMyStatService: GetMyStatService,
    private readonly updatePasswordService: UpdatePasswordService,
    private readonly withdrawService: WithdrawService,
    private readonly getRankService: GetRankService,
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

  @Get('rank')
  async getRank(
    @Query('size', ParseIntPipe)
    size: number,
    @Query('school', new ParseEnumPipe(SchoolType, { optional: true }))
    school?: SchoolType,
    @Query('grade', new ParseIntPipe({ optional: true }))
    grade?: number,
  ): Promise<GetRankResponseDto> {
    return this.getRankService.execute(size, school, grade);
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

  @Delete('me/withdraw')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  async withdraw(@GetUser() userInfo: UserInfo): Promise<void> {
    return await this.withdrawService.execute(userInfo.id);
  }
}
