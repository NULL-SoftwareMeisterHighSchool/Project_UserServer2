import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { GRPCModule } from 'src/global/modules/grpc/grpc.module';
import { CreateArticleService } from './services';

@Module({
  imports: [GRPCModule],
  controllers: [ArticleController],
  providers: [
    // services
    CreateArticleService,
  ],
})
export class ArticleModule {}
