import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/user/repositories';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { ArticleOrder, ArticleType } from '../enum';
import { UserInfo } from 'src/global/types/user-info.type';
import { ListArticleResponseDto } from '../dto/response';
import { articles } from 'src/global/grpc/types/articles/service';
import { google } from 'src/global/grpc/types/google/protobuf/timestamp';
import { fromKorDate } from 'src/global/util/lib';

type paramOptions = {
  readonly type: ArticleType;
  readonly durationStart: string;
  readonly durationEnd: string;
  readonly offset: number;
  readonly limit: number;
  readonly order: ArticleOrder;

  readonly query?: string;
  readonly authorID?: number;
};

@Injectable()
export class ListArticleService {
  constructor(
    private readonly articleClient: ArticleClient,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(
    userInfo: UserInfo,
    params: paramOptions,
  ): Promise<ListArticleResponseDto> {
    let order: articles.ListArticleOrder;
    switch (params.order) {
      case ArticleOrder.LIKES:
        order = articles.ListArticleOrder.LIKES;
        break;
      case ArticleOrder.TIME:
        order = articles.ListArticleOrder.TIME;
        break;
      case ArticleOrder.VIEWS:
        order = articles.ListArticleOrder.VIEWS;
        break;
    }

    let type: articles.ArticleType;
    switch (params.type) {
      case ArticleType.GENERAL:
        type = articles.ArticleType.GENERAL;
        break;
      case ArticleType.TECH:
        type = articles.ArticleType.TECH;
        break;
    }

    const articleList = await this.articleClient.listArticle(
      articles.ListArticleRequest.fromObject({
        amount: params.limit,
        offset: params.offset,
        authorID: params.authorID,
        duration:
          params.durationStart && params.durationEnd
            ? {
                start: google.protobuf.Timestamp.fromObject({
                  seconds: fromKorDate(params.durationStart).getTime() / 1000,
                }),
                end: google.protobuf.Timestamp.fromObject({
                  seconds: fromKorDate(params.durationEnd).getTime() / 1000,
                }),
              }
            : undefined,
        order: order,
        query: params.query,
        type: type,
        userID: userInfo ? userInfo.id : undefined,
      }),
    );

    let authorNameMap: Map<number, string>;
    if (articleList.articles.length > 0)
      authorNameMap = await this.getAuthorNameMap(articleList.articles);

    return ListArticleResponseDto.of(
      articleList.articles,
      authorNameMap,
      articleList.totalCount,
    );
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
