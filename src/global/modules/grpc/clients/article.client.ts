import { ServiceError, credentials } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { Injectable } from '@nestjs/common';
import { articles } from 'src/global/grpc/types/articles/service';

@Injectable()
export class ArticleClient {
  private readonly articleService = new articles.ArticleServiceClient(
    `http://${process.env.USER_SERVER_HOST}:${process.env.USER_SERVER_PORT}`,
    credentials.createInsecure(),
  );

  async createArticle(msg: articles.CreateArticleRequest): Promise<number> {
    return new Promise((resolve, reject) => {
      this.articleService.CreateArticle(
        msg,
        {},
        (err: ServiceError, value: articles.CreateArticleResponse) => {
          if (err.code !== Status.OK) return reject(err);
          resolve(value.articleID);
        },
      );
    });
  }

  async updateArticleBody(
    msg: articles.UpdateArticleBodyRequest,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.articleService.UpdateArticleBody(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async updateArticleTitle(
    msg: articles.UpdateArticleTitleRequest,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.articleService.UpdateArticleTitle(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async deleteArticle(msg: articles.DeleteArticleRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.articleService.DeleteArticle(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async listArticleByAuthor(): Promise<> {
    return new Promise((resolve, reject) => {
      this.articleService.ListArticleByAuthor(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async listArticleByAuthor(): Promise<> {
    return new Promise((resolve, reject) => {
      this.articleService.ListArticleByAuthor(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async getArticle();
}
