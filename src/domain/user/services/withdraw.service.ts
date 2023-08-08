import { Injectable, Logger } from '@nestjs/common';
import { StatRepository, UserRepository } from '../repositories';
import { UserNotFoundException } from '../exceptions';

@Injectable()
export class WithdrawService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly statRepository: StatRepository,
  ) {}

  async execute(userID: number): Promise<void> {
    const user = await this.userRepository
      .findOneByOrFail({ id: userID })
      .catch((e) => {
        new Logger().error(e);
        throw new UserNotFoundException(userID);
      });

    await this.statRepository.delete({ id: userID });
    await this.userRepository.delete(user);
  }
}
