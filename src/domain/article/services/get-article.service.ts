import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/user/repositories';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { UserInfo } from 'src/global/types/user-info.type';
import { GetArticleResponseDto } from '../dto/response';
import { CommentClient } from 'src/global/modules/grpc/clients/comment.client';
import { articles } from 'src/global/grpc/types/articles/service';
import { commnets } from 'src/global/grpc/types/comments/service';

@Injectable()
export class GetArticleService {
  constructor(
    private readonly articleClient: ArticleClient,
    private readonly commentClient: CommentClient,

    private readonly userRepository: UserRepository,
  ) {}

  async execute(
    userInfo: UserInfo,
    articleID: number,
  ): Promise<GetArticleResponseDto> {
    const article = await this.articleClient.getArticle(
      articles.GetArticleRequest.fromObject({
        articleID: articleID,
        userID: userInfo ? userInfo.id : undefined,
      }),
    );

    const author = await this.userRepository.findOne({
      where: { id: article.authorID },
      select: { name: true },
    });
    const authorName = author.name;

    const commentList = await this.commentClient.listComment(
      commnets.GetCommentsByArticleIDRequest.fromObject({
        articleID: articleID,
        userID: userInfo ? userInfo.id : undefined,
      }),
    );

    let authorNameMap: Map<number, string>;
    if (commentList.comments.length > 0)
      authorNameMap = await this.getAuthorNameMap(commentList.comments);

    return GetArticleResponseDto.of(
      article,
      authorName,
      commentList.comments,
      authorNameMap,
    );
  }

  private async getAuthorNameMap(
    commentList: commnets.CommentElem[],
  ): Promise<Map<number, string>> {
    const idSet = new Set(commentList.map((comment) => comment.authorID));

    const results = await this.userRepository
      .createQueryBuilder('user')
      .where('id IN (:ids)', { ids: Array.from(idSet) })
      .select(['user.name', 'user.id'])
      .getRawMany();

    const resultMap = new Map<number, string>();
    results.forEach((result) =>
      resultMap.set(result.user_id, result.user_name),
    );

    return resultMap;
  }
}
