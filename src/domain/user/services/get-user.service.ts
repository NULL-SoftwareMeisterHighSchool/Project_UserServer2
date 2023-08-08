import { Injectable } from '@nestjs/common';
import { GetUserResponseDto } from '../dto/response';
import { UserRepository } from '../repositories';
import { UserNotFoundException } from '../exceptions';
import { ArticleClient } from 'src/global/modules/grpc/clients';
import { articles } from 'src/global/grpc/types/articles/service';
import { UserInfo } from 'src/global/types/user-info.type';

@Injectable()
export class GetUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly articleClient: ArticleClient,
  ) {}

  async execute(
    userInfo: UserInfo,
    userID: number,
  ): Promise<GetUserResponseDto> {
    const user = await this.userRepository
      .findOneOrFail({
        where: { id: userID },
        relations: { stacks: true },
      })
      .catch(() => {
        throw new UserNotFoundException(userID);
      });

    const options = {
      amount: 10,
      offset: 0,
      order: articles.ListArticleOrder.TIME,
      authorID: userID,
      userID: userInfo && userInfo.id === userID ? userID : undefined,
      isPrivate: userInfo && userInfo.id === userID,
      type: articles.ArticleType.GENERAL,
    };

    const generalArticleList = await this.articleClient.listArticleByAuthor(
      articles.ListArticleByAuthorRequest.fromObject(options),
    );
    options.type = articles.ArticleType.TECH;
    const techArticleList = await this.articleClient.listArticleByAuthor(
      articles.ListArticleByAuthorRequest.fromObject(options),
    );

    return GetUserResponseDto.of(
      user,
      generalArticleList.articles,
      techArticleList.articles,
    );
  }
}
