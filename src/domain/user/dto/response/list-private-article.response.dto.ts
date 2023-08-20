import { ListArticleElementDto } from 'src/domain/article/dto/response';
import { articles } from 'src/global/grpc/types/articles/service';
import { convertToKorDate } from 'src/global/util/lib';

export class ListPrivateArticleResponseDto {
  public readonly articles: ListArticleElementDto[];

  public static of(
    articles: articles.ListArticleElement[],
    authorNameMap: Map<number, string>,
  ): ListPrivateArticleResponseDto {
    return {
      articles: articles.map((article) => ({
        author: {
          id: article.authorID,
          name: authorNameMap.get(article.authorID),
        },
        createdAt: convertToKorDate(new Date(article.createdAt.seconds * 1000)),
        id: article.articleID,
        likes: article.likes,
        summary: article.summary,
        thumbnail: article.thumbnail,
        title: article.title,
        views: article.views,
      })),
    };
  }
}
