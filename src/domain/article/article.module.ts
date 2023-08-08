import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { GRPCModule } from 'src/global/modules/grpc/grpc.module';
import { CreateArticleService, GetArticleService } from './services';
import { UserModule } from '../user/user.module';

@Module({
  imports: [GRPCModule, UserModule],
  controllers: [ArticleController],
  providers: [
    // services
    CreateArticleService,
    GetArticleService,
  ],
})
export class ArticleModule {}
