import { ListArticleElementDto } from 'src/domain/article/dto/response';

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
}
