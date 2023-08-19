import { Injectable } from '@nestjs/common';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { UserInfo } from 'src/global/types/user-info.type';
import { CreateArticleRequestDto } from '../dto/request';
import { CreateArticleResponseDto } from '../dto/response';
import { articles } from 'src/global/grpc/types/articles/service';
import { ArticleType } from '../enum';

@Injectable()
export class CreateArticleService {
  constructor(private readonly articleClient: ArticleClient) {}

  async execute(
    userInfo: UserInfo,
    request: CreateArticleRequestDto,
  ): Promise<CreateArticleResponseDto> {
    const { id } = userInfo;

    let type: articles.ArticleType;
    switch (request.type) {
      case ArticleType.GENERAL:
        type = articles.ArticleType.GENERAL;
        break;
      case ArticleType.TECH:
        type = articles.ArticleType.TECH;
        break;
      case ArticleType.INTRODUCE:
        type = articles.ArticleType.INTRODUCE;
    }

    const articleID = await this.articleClient.createArticle(
      articles.CreateArticleRequest.fromObject({
        authorID: id,
        title: request.title,
        type: type,
      }),
    );
    await this.articleClient.updateArticleBody(
      articles.UpdateArticleBodyRequest.fromObject({
        articleID: articleID,
        userID: id,
        body: request.content,
      }),
    );

    return CreateArticleResponseDto.of(articleID);
  }
}
