import { Injectable } from '@nestjs/common';
import { articles } from 'src/global/grpc/types/articles/service';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { UserInfo } from 'src/global/types/user-info.type';

@Injectable()
export class DeleteArticleService {
  constructor(private readonly articleClient: ArticleClient) {}

  async execute(userInfo: UserInfo, articleID: number): Promise<void> {
    const { id } = userInfo;

    await this.articleClient.deleteArticle(
      articles.DeleteArticleRequest.fromObject({
        articleID: articleID,
        userID: id,
      }),
    );
  }
}
