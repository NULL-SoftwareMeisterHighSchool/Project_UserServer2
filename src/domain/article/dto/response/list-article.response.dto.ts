import { articles } from 'src/global/grpc/types/articles/service';
import { ListArticleElementDto } from './list-article.element.dto';
import { convertToKorDate } from 'src/global/util/lib';

export class ListArticleResponseDto {
  public readonly articles: ListArticleElementDto[];
  public readonly totalCount: number;

  public static of(
    articleList: articles.ListArticleElement[],
    authorNameMap: Map<number, string>,
    totalCount: number,
  ): ListArticleResponseDto {
    return {
      articles: articleList.map(
        (article): ListArticleElementDto => ({
          id: article.articleID,
          author: {
            id: article.authorID,
            name: authorNameMap.get(article.authorID),
          },
          createdAt: convertToKorDate(new Date(article.createdAt.nanos / 1000)),
          summary: article.summary,
          thumbnail: article.thumbnail,
          title: article.title,
        }),
      ),
      totalCount: totalCount,
    };
  }
}
