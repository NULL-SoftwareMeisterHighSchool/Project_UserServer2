import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CreateCommentService } from './services';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [
    // services
    CreateCommentService,
  ],
})
export class CommentModule {}
