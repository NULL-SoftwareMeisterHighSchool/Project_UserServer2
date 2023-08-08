import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/global/decorators/get-user-info.decorator';
import { AuthGuard } from 'src/global/guards/auth.guard';
import { UserInfo } from 'src/global/types/user-info.type';
import { CreateCommentRequestDto } from './dto/request';
import { CreateCommentService } from './services';

@Controller('articles/:articleID/comments')
export class CommentController {
  constructor(private readonly createCommentService: CreateCommentService) {}

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
}
