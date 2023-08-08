import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CreateCommentService, DeleteCommentService } from './services';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [
    // services
    CreateCommentService,
    DeleteCommentService,
  ],
})
export class CommentModule {}
