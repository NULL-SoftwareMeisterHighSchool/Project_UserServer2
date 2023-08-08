import { ServiceError, credentials } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { Injectable } from '@nestjs/common';
import { articles } from 'src/global/grpc/types/articles/service';

@Injectable()
export class ArticleClient {
  private readonly articleService = new articles.ArticleServiceClient(
    `${process.env.ARTICLE_SERVER_HOST}:${process.env.ARTICLE_SERVER_PORT}`,
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

  async setVisibility(
    msg: articles.SetArticleVisibilityRequest,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.articleService.SetArticleVisibility(msg, {}, (err: ServiceError) => {
        if (err.code !== Status.OK) return reject(err);
        resolve();
      });
    });
  }

  async toggleLike(msg: articles.ToggleArticleLikeRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.articleService.ToggleArticleLike(msg, {}, (err: ServiceError) => {
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

  async listArticleByAuthor(
    msg: articles.ListArticleByAuthorRequest,
  ): Promise<articles.ListArticleResponse> {
    return new Promise((resolve, reject) => {
      this.articleService.ListArticleByAuthor(
        msg,
        {},
        (err: ServiceError, value: articles.ListArticleResponse) => {
          if (err.code !== Status.OK) return reject(err);
          resolve(value);
        },
      );
    });
  }

  async listArticle(
    msg: articles.ListArticleRequest,
  ): Promise<articles.ListArticleResponse> {
    return new Promise((resolve, reject) => {
      this.articleService.ListArticle(
        msg,
        {},
        (err: ServiceError, value: articles.ListArticleResponse) => {
          if (err.code !== Status.OK) return reject(err);
          resolve(value);
        },
      );
    });
  }

  async getArticle(
    msg: articles.GetArticleRequest,
  ): Promise<articles.GetArticleResponse> {
    return new Promise((resolve, reject) => {
      this.articleService.GetArticle(
        msg,
        {},
        (err: ServiceError, value: articles.GetArticleResponse) => {
          if (err.code !== Status.OK) return reject(err);
          resolve(value);
        },
      );
    });
  }
}
