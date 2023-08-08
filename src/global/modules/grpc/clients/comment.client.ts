import { ServiceError, credentials } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { Injectable } from '@nestjs/common';
import { commnets } from 'src/global/grpc/types/comments/service';

@Injectable()
export class CommentClient {
  private readonly commentService = new commnets.CommentServiceClient(
    `http://${process.env.USER_SERVER_HOST}:${process.env.USER_SERVER_PORT}`,
    credentials.createInsecure(),
  );

  async createComment(msg: commnets.CreateCommentRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.commentService.CreateComment(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async deleteComment(msg: commnets.DeleteCommnetRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.commentService.DeleteCommnet(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async listComment(
    msg: commnets.GetCommentsByArticleIDRequest,
  ): Promise<commnets.GetCommentsByArticleIDResponse> {
    return new Promise((resolve, reject) => {
      this.commentService.GetCommentsByArticleID(
        msg,
        {},
        (err: ServiceError, value: commnets.GetCommentsByArticleIDResponse) => {
          if (err.code !== Status.OK) return reject(err);
          resolve(value);
        },
      );
    });
  }
}
