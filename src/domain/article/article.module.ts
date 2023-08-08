import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleClient } from './client/article.client';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleClient],
})
export class ArticleModule {}
