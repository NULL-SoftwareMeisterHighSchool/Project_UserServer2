import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { GRPCModule } from 'src/global/modules/grpc/grpc.module';

@Module({
  imports: [GRPCModule],
  controllers: [ArticleController],
  providers: [],
})
export class ArticleModule {}
