import { MailModule } from './global/modules/mail/mail.module';
import { Module } from '@nestjs/common';
import { ArticleModule } from './domain/article/article.module';
import { AuthModule } from './domain/auth/auth.module';
import { CommentModule } from './domain/comment/comment.module';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './global/config';
import { CacheModule } from './global/modules/cache/cache.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from './global/modules/jwt';
import { GRPCModule } from './global/modules/grpc/grpc.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    // global
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'prod'
          ? './global/config/.prod.env'
          : './src/global/config/.dev.env',
    }),
    TypeOrmModule.forRootAsync({ useFactory: () => TypeORMConfig() }),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 30,
    }),

    JwtModule,
    MailModule,
    CacheModule,
    GRPCModule,

    // domain
    ArticleModule,
    AuthModule,
    CommentModule,
    UserModule,
  ],
})
export class AppModule {}
