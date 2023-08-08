import { Module } from '@nestjs/common';
import { ArticleClient, CommentClient, UserClient } from './clients';

@Module({
  providers: [UserClient, ArticleClient, CommentClient],
  exports: [UserClient, ArticleClient, CommentClient],
})
export class GRPCModule {}
