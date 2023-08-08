import { ServiceError, credentials } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { Injectable } from '@nestjs/common';
import { users } from 'src/global/grpc/types/users/service';

@Injectable()
export class UserClient {
  private readonly userEventService = new users.UserEventServiceClient(
    `${process.env.ARTICLE_SERVER_HOST}:${process.env.ARTICLE_SERVER_PORT}`,
    credentials.createInsecure(),
  );

  async createUser(userID: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const msg = users.CreateUserEvent.fromObject({ userID });
      this.userEventService.PublishUserCreated(msg, (err: ServiceError) => {
        if (err.code === Status.UNKNOWN) return reject(err.message);
        resolve();
      });
    });
  }

  async deleteUser(userID: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const msg = users.DeleteUserEvent.fromObject({ userID });
      this.userEventService.PublishUserDeleted(msg, (err: ServiceError) => {
        if (err.code === Status.UNKNOWN) return reject(err.message);
        resolve();
      });
    });
  }

  async getGithubInfo(
    userList: {
      userID?: number;
      userLogin?: string;
    }[],
  ): Promise<users.GithubStats[]> {
    return new Promise((resolve, reject) => {
      const msg = users.GetGithubStatsRequest.fromObject({ users: userList });
      this.userEventService.GetGithubStats(
        msg,
        (err: ServiceError, value: users.GetGithubStatsResponse) => {
          if (err.code === Status.UNKNOWN) return reject(err.message);
          resolve(value.statElems);
        },
      );
    });
  }
}
