import { UserInfo } from 'src/global/types/user-info.type';

export class ListArticleElementDto {
  public readonly id: number;
  public readonly title: string;
  public readonly thumbnail: string;
  public readonly summary: string;
  public readonly author: UserInfo;
  public readonly createdAt: string;
}
