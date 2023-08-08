import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { GRPCModule } from 'src/global/modules/grpc/grpc.module';
import {
  CreateArticleService,
  DeleteArticleService,
  GetArticleService,
  SetVisibilityService,
  UpdateArticleService,
} from './services';
import { UserModule } from '../user/user.module';

@Module({
  imports: [GRPCModule, UserModule],
  controllers: [ArticleController],
  providers: [
    // services
    CreateArticleService,
    GetArticleService,
    UpdateArticleService,
    DeleteArticleService,
    SetVisibilityService,
  ],
})
export class ArticleModule {}
