import { ListArticleElementDto } from 'src/domain/article/dto/response';
import { User } from '../../entities';
import { convertToKorDate } from 'src/global/util/lib';
import { articles } from 'src/global/grpc/types/articles/service';

export class GetUserResponseDto {
  public readonly name: string;
  public readonly email: string;
  public readonly bio: string;
  public readonly githubURL: string;
  public readonly portfolioURL: string;

  public readonly stacks: string[];
  public readonly articles: {
    general: ListArticleElementDto[];
    tech: ListArticleElementDto[];
  };

  public static of(
    user: User,
    generalArticleList: articles.ListArticleElement[],
    techArticleList: articles.ListArticleElement[],
  ): GetUserResponseDto {
    return {
      name: user.name,
      bio: user.bio,
      email: user.email,
      githubURL: user.githubURL,
      portfolioURL: user.portfolioURL,
      stacks: user.stacks.map((stack) => stack.name),
      articles: {
        general: generalArticleList.map((article) => ({
          author: {
            id: user.id,
            name: user.name,
          },
          createdAt: convertToKorDate(
            new Date(article.createdAt.seconds * 1000),
          ),
          id: article.articleID,
          summary: article.summary,
          thumbnail: article.thumbnail,
          title: article.title,
        })),
        tech: techArticleList.map((article) => ({
          author: {
            id: user.id,
            name: user.name,
          },
          createdAt: convertToKorDate(
            new Date(article.createdAt.seconds * 1000),
          ),
          id: article.articleID,
          summary: article.summary,
          thumbnail: article.thumbnail,
          title: article.title,
        })),
      },
    };
  }
}
