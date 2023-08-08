import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import { CreateArticleRequestDto } from './dto/request';
import {
  CreateArticleResponseDto,
  GetArticleResponseDto,
} from './dto/response';
import { CreateArticleService, GetArticleService } from './services';
import { RPCExceptionFilter } from 'src/global/exceptions/filters/rpc-exception.filter';
import { OptionalGuard } from 'src/global/guards/optional.guard';

@Controller('articles')
@UseFilters(RPCExceptionFilter)
export class ArticleController {
  constructor(
    private readonly createArticleService: CreateArticleService,
    private readonly getArticleService: GetArticleService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async createArticle(
    @GetUser() userInfo: UserInfo,
    @Body() request: CreateArticleRequestDto,
  ): Promise<CreateArticleResponseDto> {
    return await this.createArticleService.execute(userInfo, request);
  }

  @Get(':id')
  @UseGuards(OptionalGuard)
  async getArticle(
    @GetUser() userInfo: UserInfo,
    @Param('id', ParseIntPipe) articleID: number,
  ): Promise<GetArticleResponseDto> {
    return await this.getArticleService.execute(userInfo, articleID);
  }
}
