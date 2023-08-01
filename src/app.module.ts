import { Module } from '@nestjs/common';
import { ArticleModule } from './domain/article/article.module';
import { AuthModule } from './domain/auth/auth.module';
import { CommentModule } from './domain/comment/comment.module';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfig, TypeORMConfig } from './global/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ArticleModule,
    AuthModule,
    CommentModule,
    UserModule,

    TypeOrmModule.forRoot(TypeORMConfig),
    JwtModule.register(JwtConfig),
  ],
})
export class AppModule {}
