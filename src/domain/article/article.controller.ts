import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import {
  CreateArticleRequestDto,
  SetVisibilityReqeustDto,
  UpdateArticleRequestDto,
} from './dto/request';
import {
  CreateArticleResponseDto,
  GetArticleResponseDto,
  ListArticleResponseDto,
} from './dto/response';
import {
  CreateArticleService,
  DeleteArticleService,
  GetArticleService,
  ListArticleService,
  SetVisibilityService,
  ToggleLikeService,
  UpdateArticleService,
} from './services';
import { RPCExceptionFilter } from 'src/global/exceptions/filters/rpc-exception.filter';
import { OptionalGuard } from 'src/global/guards/optional.guard';
import { ArticleOrder, ArticleType } from './enum';

@Controller('articles')
@UseFilters(RPCExceptionFilter)
export class ArticleController {
  constructor(
    private readonly createArticleService: CreateArticleService,
    private readonly getArticleService: GetArticleService,
    private readonly updateArticleService: UpdateArticleService,
    private readonly deleteArticleService: DeleteArticleService,
    private readonly setVisibilityService: SetVisibilityService,
    private readonly toggleLikeService: ToggleLikeService,
    private readonly listArticleService: ListArticleService,
  ) {}

  @Post()
  @UseGuards(OptionalGuard)
  async listArticle(
    @GetUser() userInfo: UserInfo,
    @Query('type', new ParseEnumPipe(ArticleType)) type: ArticleType,
    @Query('duration_start') durationStart: string,
    @Query('duration_end') durationEnd: string,
    @Query('offset', ParseIntPipe) offset: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('order', new ParseEnumPipe(ArticleOrder)) order: ArticleOrder,

    @Query('query') query?: string,
    @Query('authorID', new ParseIntPipe({ optional: true })) authorID?: number,
  ): Promise<ListArticleResponseDto> {
    return await this.listArticleService.execute(userInfo, {
      type,
      offset,
      limit,
      order,
      durationEnd,
      durationStart,
      authorID,
      query,
    });
  }

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

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteArticle(
    @GetUser() userInfo: UserInfo,
    @Param('id', ParseIntPipe) articleID: number,
  ): Promise<void> {
    return await this.deleteArticleService.execute(userInfo, articleID);
  }

  @Put(':id/visibility')
  @UseGuards(AuthGuard)
  async setVisibility(
    @GetUser() userInfo: UserInfo,
    @Param('id', ParseIntPipe) articleID: number,
    @Body() request: SetVisibilityReqeustDto,
  ): Promise<void> {
    return await this.setVisibilityService.execute(
      userInfo,
      articleID,
      request,
    );
  }

  @Post(':id/like')
  @UseGuards(AuthGuard)
  async toggleLike(
    @GetUser() userInfo: UserInfo,
    @Param('id', ParseIntPipe) articleID: number,
  ): Promise<void> {
    return await this.toggleLikeService.execute(userInfo, articleID);
  }
}
