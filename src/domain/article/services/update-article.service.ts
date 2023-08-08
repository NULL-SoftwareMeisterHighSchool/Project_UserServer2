import { Injectable } from '@nestjs/common';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { UserInfo } from 'src/global/types/user-info.type';
import { UpdateArticleRequestDto } from '../dto/request';
import { articles } from 'src/global/grpc/types/articles/service';

@Injectable()
export class UpdateArticleService {
  constructor(private readonly articleClient: ArticleClient) {}

  async execute(
    userInfo: UserInfo,
    articleID: number,
    reqeust: UpdateArticleRequestDto,
  ): Promise<void> {
    const { id } = userInfo;

    await this.articleClient.updateArticleTitle(
      articles.UpdateArticleTitleRequest.fromObject({
        articleID: articleID,
        title: reqeust.title,
        userID: id,
      }),
    );
    await this.articleClient.updateArticleBody(
      articles.UpdateArticleBodyRequest.fromObject({
        articleID: articleID,
        body: reqeust.content,
        userID: id,
      }),
    );
  }
}
