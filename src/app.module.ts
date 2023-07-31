import { Module } from '@nestjs/common';
import { ArticleModule } from './domain/article/article.module';
import { AuthModule } from './domain/auth/auth.module';
import { CommentModule } from './domain/comment/comment.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [ArticleModule, AuthModule, CommentModule, UserModule],
})
export class AppModule {}
