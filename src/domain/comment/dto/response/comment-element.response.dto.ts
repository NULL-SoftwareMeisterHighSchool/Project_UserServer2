import { UserInfo } from 'src/global/types/user-info.type';

export class CommentElement {
  public readonly commentID: number;
  public readonly author: UserInfo;
  public readonly content: string;
  public readonly createdAt: string;
}
