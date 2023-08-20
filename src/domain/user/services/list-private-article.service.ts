import { Injectable } from '@nestjs/common';
import { articles } from 'src/global/grpc/types/articles/service';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { UserInfo } from 'src/global/types/user-info.type';
import { UserRepository } from '../repositories';
import { ListPrivateArticleResponseDto } from '../dto/response';

@Injectable()
export class ListPrivateArticleService {
  constructor(
    private readonly articleClient: ArticleClient,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(userInfo: UserInfo): Promise<ListPrivateArticleResponseDto> {
    const articleList: articles.ListArticleElement[] = [];
    const request = articles.ListArticleByAuthorRequest.fromObject({
      authorID: userInfo.id,
      amount: 100,
      isPrivate: true,
      userID: userInfo.id,
      offset: 0,
      type: articles.ArticleType.GENERAL,
    });

    request.order = articles.ListArticleOrder.TIME;
    articleList.push(
      ...(await this.articleClient
        .listArticleByAuthor(request)
        .then((list) => list.articles)),
    );

    request.type = articles.ArticleType.TECH;
    articleList.push(
      ...(await this.articleClient
        .listArticleByAuthor(request)
        .then((list) => list.articles)),
    );

    request.type = articles.ArticleType.INTRODUCE;
    articleList.push(
      ...(await this.articleClient
        .listArticleByAuthor(request)
        .then((list) => list.articles)),
    );

    let authorNameMap: Map<number, string>;
    if (articleList.length > 0)
      authorNameMap = await this.getAuthorNameMap(articleList);

    return ListPrivateArticleResponseDto.of(articleList, authorNameMap);
  }

  private async getAuthorNameMap(
    articleList: articles.ListArticleElement[],
  ): Promise<Map<number, string>> {
    const idSet = new Set(articleList.map((article) => article.authorID));

    const results = await this.userRepository
      .createQueryBuilder('user')
      .where('id IN (:ids)', { ids: Array.from(idSet) })
      .select(['user.name', 'user.id'])
      .getRawMany();

    const resultMap = new Map<number, string>();
    results.forEach((result) =>
      resultMap.set(result.user_id, result.user_name),
    );

    return resultMap;
  }
}
