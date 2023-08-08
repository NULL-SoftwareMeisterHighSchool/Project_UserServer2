import { Injectable } from '@nestjs/common';
import { commnets } from 'src/global/grpc/types/comments/service';
import { CommentClient } from 'src/global/modules/grpc/clients';
import { UserInfo } from 'src/global/types/user-info.type';

@Injectable()
export class DeleteCommentService {
  constructor(private readonly commentClient: CommentClient) {}

  async execute(
    userInfo: UserInfo,
    articleID: number,
    commentID: number,
  ): Promise<void> {
    const { id } = userInfo;

    await this.commentClient.deleteComment(
      commnets.DeleteCommnetRequest.fromObject({
        articleID: articleID,
        commentID: commentID,
        userID: id,
      }),
    );
  }
}
