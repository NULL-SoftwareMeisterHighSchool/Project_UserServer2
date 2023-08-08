import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import {
  CreateArticleRequestDto,
  UpdateArticleRequestDto,
} from './dto/request';
import {
  CreateArticleResponseDto,
  GetArticleResponseDto,
} from './dto/response';
import {
  CreateArticleService,
  GetArticleService,
  UpdateArticleService,
} from './services';
import { RPCExceptionFilter } from 'src/global/exceptions/filters/rpc-exception.filter';
import { OptionalGuard } from 'src/global/guards/optional.guard';

@Controller('articles')
@UseFilters(RPCExceptionFilter)
export class ArticleController {
  constructor(
    private readonly createArticleService: CreateArticleService,
    private readonly getArticleService: GetArticleService,
    private readonly updateArticleService: UpdateArticleService,
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

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateArticle(
    @GetUser() userInfo: UserInfo,
    @Param('id', ParseIntPipe) articleID: number,
    @Body() reqeust: UpdateArticleRequestDto,
  ): Promise<void> {
    return await this.updateArticleService.execute(
      userInfo,
      articleID,
      reqeust,
    );
  }
}
