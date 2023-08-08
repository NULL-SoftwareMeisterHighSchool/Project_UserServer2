import { Body, Controller, Post, UseFilters, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import { CreateArticleRequestDto } from './dto/request';
import { CreateArticleResponseDto } from './dto/response';
import { CreateArticleService } from './services';
import { RPCExceptionFilter } from 'src/global/exceptions/filters/rpc-exception.filter';

@Controller('articles')
@UseFilters(RPCExceptionFilter)
export class ArticleController {
  constructor(private readonly createArticleService: CreateArticleService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createArticle(
    @GetUser() userInfo: UserInfo,
    @Body() request: CreateArticleRequestDto,
  ): Promise<CreateArticleResponseDto> {
    return await this.createArticleService.execute(userInfo, request);
  }
}
