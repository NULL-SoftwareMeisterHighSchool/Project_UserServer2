import { UserInfo } from 'src/global/types/user-info.type';
import { ArticleType } from '../../enum';
import { CommentElement } from 'src/domain/comment/dto/response';
import { articles } from 'src/global/grpc/types/articles/service';
import { commnets } from 'src/global/grpc/types/comments/service';
import { convertToKorDate } from 'src/global/util/lib';

export class GetArticleResponseDto {
  public readonly articleID: number;
  public readonly articleType: ArticleType;
  public readonly title: string;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly body: string;
  public readonly views: number;
  public readonly likes: number;
  public readonly commentCount: number;
  public readonly author: UserInfo;
  public readonly isPrivate: boolean;
  public readonly isLiked: boolean;
  public readonly isAuthor: boolean;

  public readonly comments: CommentElement[];

  public static of(
    article: articles.GetArticleResponse,
    authorName: string,
    commentList: commnets.CommentElem[],
    commentAuthorMap: Map<number, string>,
  ): GetArticleResponseDto {
    let articleType: ArticleType;
    switch (article.type) {
      case articles.ArticleType.GENERAL:
        articleType = ArticleType.GENERAL;
        break;
      case articles.ArticleType.TECH:
        articleType = ArticleType.TECH;
        break;
    }

    return {
      articleID: article.articleID,
      articleType: articleType,
      author: {
        id: article.authorID,
        name: authorName,
      },
      body: article.body,
      commentCount: article.comments,
      createdAt: convertToKorDate(new Date(article.createdAt.nanos / 1000)),
      updatedAt: convertToKorDate(new Date(article.updatedAt.nanos / 1000)),
      isAuthor: article.isAuthor,
      isLiked: article.isLiked,
      isPrivate: article.isPrivate,
      likes: article.likes,
      title: article.title,
      views: article.views,
      comments: commentList.map((comment) => ({
        author: {
          id: comment.authorID,
          name: commentAuthorMap.get(comment.authorID),
        },
        commentID: comment.commentID,
        content: comment.body,
        createdAt: convertToKorDate(new Date(comment.createdAt.nanos / 1000)),
      })),
    };
  }
}
