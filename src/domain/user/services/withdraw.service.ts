import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { StatRepository, UserRepository } from '../repositories';
import { UserNotFoundException } from '../exceptions';
import { UserClient } from '../client/user.client';

@Injectable()
export class WithdrawService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly statRepository: StatRepository,

    private readonly userClient: UserClient,
  ) {}

  async execute(userID: number): Promise<void> {
    const user = await this.userRepository
      .findOneByOrFail({ id: userID })
      .catch((e) => {
        throw new UserNotFoundException(userID);
      });

    await this.statRepository.delete({ id: userID });
    await this.userRepository.delete(user);
    await this.userClient.deleteUser(userID).catch((msg: string) => {
      throw new InternalServerErrorException(msg);
    });
  }
}
