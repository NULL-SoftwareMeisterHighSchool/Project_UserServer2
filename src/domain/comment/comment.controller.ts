import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import { CreateCommentRequestDto } from './dto/request';
import { CreateCommentService, DeleteCommentService } from './services';
import { RPCExceptionFilter } from 'src/global/exceptions/filters/rpc-exception.filter';

@Controller('articles/:articleID/comments')
@UseFilters(RPCExceptionFilter)
export class CommentController {
  constructor(
    private readonly createCommentService: CreateCommentService,
    private readonly deleteCommentService: DeleteCommentService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async createComment(
    @GetUser() userInfo: UserInfo,
    @Param('articleID', ParseIntPipe) articleID: number,
    @Body() request: CreateCommentRequestDto,
  ): Promise<void> {
    return await this.createCommentService.execute(
      userInfo,
      articleID,
      request,
    );
  }

  @Delete(':commentID')
  @UseGuards(AuthGuard)
  async deleteComment(
    @GetUser() userInfo: UserInfo,
    @Param('articleID', ParseIntPipe) articleID: number,
    @Param('commentID', ParseIntPipe) commentID: number,
  ): Promise<void> {
    return await this.deleteCommentService.execute(
      userInfo,
      articleID,
      commentID,
    );
  }
}
