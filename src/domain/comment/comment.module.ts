import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CreateCommentService, DeleteCommentService } from './services';
import { GRPCModule } from 'src/global/modules/grpc/grpc.module';

@Module({
  imports: [GRPCModule],
  controllers: [CommentController],
  providers: [
    // services
    CreateCommentService,
    DeleteCommentService,
  ],
})
export class CommentModule {}
