import { Injectable } from '@nestjs/common';
import { CommentClient } from 'src/global/modules/grpc/clients';
import { UserInfo } from 'src/global/types/user-info.type';
import { CreateCommentRequestDto } from '../dto/request';
import { commnets } from 'src/global/grpc/types/comments/service';

@Injectable()
export class CreateCommentService {
  constructor(private readonly commentClient: CommentClient) {}

  async execute(
    userInfo: UserInfo,
    articleID: number,
    request: CreateCommentRequestDto,
  ): Promise<void> {
    const { id } = userInfo;

    await this.commentClient.createComment(
      commnets.CreateCommentRequest.fromObject({
        articleID: articleID,
        authorID: id,
        body: request.body,
      }),
    );
  }
}
