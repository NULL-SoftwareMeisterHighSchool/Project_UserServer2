import { Module } from '@nestjs/common';
import { ArticleModule } from './domain/article/article.module';
import { AuthModule } from './domain/auth/auth.module';
import { CommentModule } from './domain/comment/comment.module';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './global/config';

@Module({
  imports: [
    ArticleModule,
    AuthModule,
    CommentModule,
    UserModule,
    TypeOrmModule.forRoot(TypeORMConfig),
  ],
})
export class AppModule {}
