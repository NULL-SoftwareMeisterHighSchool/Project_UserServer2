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
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import {
  GetMyStatResponseDto,
  GetRankResponseDto,
  GetUserResponseDto,
  ListPrivateArticleResponseDto,
} from './dto/response';
import {
  GetMyStatService,
  GetRankService,
  GetUserService,
  ListPrivateArticleService,
  UpdatePasswordService,
  UpdateUserService,
  WithdrawService,
} from './services';
import { UpdateMeRequestDto, UpdatePasswordRequestDto } from './dto/request';
import { SchoolType } from './enums';
import { OptionalGuard } from 'src/global/guards/optional.guard';
import { RPCExceptionFilter } from 'src/global/exceptions/filters/rpc-exception.filter';

@Controller('users')
@UseFilters(RPCExceptionFilter)
export class UserController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly getMyStatService: GetMyStatService,
    private readonly updatePasswordService: UpdatePasswordService,
    private readonly withdrawService: WithdrawService,
    private readonly getRankService: GetRankService,
    private readonly listPrivateArticleService: ListPrivateArticleService,
  ) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getMe(@GetUser() userInfo: UserInfo): Promise<GetUserResponseDto> {
    return await this.getUserService.execute(userInfo, userInfo.id);
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
  @UseGuards(OptionalGuard)
  async getUser(
    @GetUser() userInfo: UserInfo,
    @Param('userID', ParseIntPipe) userID: number,
  ): Promise<GetUserResponseDto> {
    return await this.getUserService.execute(userInfo, userID);
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

  @Get('me/temp-articles')
  @UseGuards(AuthGuard)
  async getMyTempArticles(
    @GetUser() userInfo: UserInfo,
  ): Promise<ListPrivateArticleResponseDto> {
    return await this.listPrivateArticleService.execute(userInfo);
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
