import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    // ClientsModule.register({
    //   clients: [
    //     {
    //       transport: Transport.GRPC,
    //       name: 'ARTICLE_PACKAGE',
    //       options: {
    //         package: 'articles',
    //         protoPath: join(
    //           __dirname,
    //           '../../global/grpc/proto/articles/service.proto',
    //         ),
    //       },
    //     },
    //   ],
    // }),
  ],
  controllers: [ArticleController],
})
export class ArticleModule {}
