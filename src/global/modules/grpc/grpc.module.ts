import { Module } from '@nestjs/common';
import { ArticleClient, UserClient } from './clients';
import { CommentModule } from 'src/domain/comment/comment.module';

@Module({
  providers: [UserClient, ArticleClient, CommentModule],
  exports: [UserClient, ArticleClient, CommentModule],
})
export class GRPCModule {}
