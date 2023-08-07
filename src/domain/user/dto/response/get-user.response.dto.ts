import { ListArticleElementDto } from 'src/domain/article/dto/response';
import { User } from '../../entities';
import { convertToKorDate } from 'src/global/util/lib';

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

  public static of(user: User): GetUserResponseDto {
    return {
      name: user.name,
      bio: user.bio,
      email: user.email,
      githubURL: user.githubURL,
      portfolioURL: user.portfolioURL,
      stacks: user.stacks.map((stack) => stack.name),
      articles: {
        general: [
          {
            id: 123,
            author: { id: 3, name: '김원욱' },
            createdAt: convertToKorDate(new Date()),
            title: '안녕 이건 제목',
            summary: '안녕 이건 요약',
            thumbnail: '',
          },
        ],
        tech: [
          {
            id: 5,
            author: { id: 3, name: '김원욱' },
            createdAt: convertToKorDate(new Date()),
            title: '안녕 이건 제목',
            summary: '안녕 이건 요약',
            thumbnail: 'https://source.unsplash.com/random',
          },
        ],
      },
    };
  }
}
