import { credentials } from '@grpc/grpc-js';
import { Injectable } from '@nestjs/common';
import { articles } from 'src/global/grpc/types/articles/service';

@Injectable()
export class ArticleClient {
  private readonly articleService = new articles.ArticleServiceClient(
    `http://${process.env.USER_SERVER_HOST}:${process.env.USER_SERVER_PORT}`,
    credentials.createInsecure(),
  );
}
