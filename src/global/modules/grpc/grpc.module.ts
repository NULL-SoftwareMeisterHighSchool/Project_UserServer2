import { Module } from '@nestjs/common';
import { ArticleClient, UserClient } from './clients';

@Module({
  providers: [UserClient, ArticleClient],
  exports: [UserClient, ArticleClient],
})
export class GRPCModule {}
