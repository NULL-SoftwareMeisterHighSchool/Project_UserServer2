import { ServiceError, credentials } from '@grpc/grpc-js';
import { Injectable } from '@nestjs/common';
import { commnets } from 'src/global/grpc/types/comments/service';

@Injectable()
export class CommentClient {
  private readonly commentService = new commnets.CommentServiceClient(
    `${process.env.ARTICLE_SERVER_HOST}:${process.env.ARTICLE_SERVER_PORT}`,
    credentials.createInsecure(),
  );

  async createComment(msg: commnets.CreateCommentRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.commentService.CreateComment(msg, {}, (err: ServiceError) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async deleteComment(msg: commnets.DeleteCommnetRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.commentService.DeleteCommnet(msg, {}, (err: ServiceError) => {
        if (err) return reject(err);
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
          if (err) return reject(err);
          resolve(value);
        },
      );
    });
  }
}
