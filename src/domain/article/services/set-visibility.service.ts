import { Injectable } from '@nestjs/common';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { SetVisibilityReqeustDto } from '../dto/request';
import { UserInfo } from 'src/global/types/user-info.type';
import { articles } from 'src/global/grpc/types/articles/service';

@Injectable()
export class SetVisibilityService {
  constructor(private readonly articleClient: ArticleClient) {}

  async execute(
    userInfo: UserInfo,
    articleID: number,
    reqeust: SetVisibilityReqeustDto,
  ): Promise<void> {
    const { id } = userInfo;

    await this.articleClient.setVisibility(
      articles.SetArticleVisibilityRequest.fromObject({
        articleID: articleID,
        isPrivate: reqeust.isPrivate,
        userID: id,
      }),
    );
  }
}
