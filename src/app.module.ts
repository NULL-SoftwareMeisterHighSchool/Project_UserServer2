import { MailModule } from './global/modules/mail/mail.module';
import { Module } from '@nestjs/common';
import { ArticleModule } from './domain/article/article.module';
import { AuthModule } from './domain/auth/auth.module';
import { CommentModule } from './domain/comment/comment.module';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModuleConfig, TypeORMConfig } from './global/config';
import { JwtModule } from '@nestjs/jwt';
import { CacheModule } from './global/modules/cache/cache.module';

@Module({
  imports: [
    // domain
    ArticleModule,
    AuthModule,
    CommentModule,
    UserModule,

    // global
    MailModule,
    CacheModule,

    TypeOrmModule.forRoot(TypeORMConfig),
    JwtModule.register(JwtModuleConfig),
  ],
})
export class AppModule {}
