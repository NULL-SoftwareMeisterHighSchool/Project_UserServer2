import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { UserNotFoundException } from '../exceptions';

@Injectable()
export class WithdrawService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userID: number): Promise<void> {
    const user = await this.userRepository
      .findOneOrFail({
        where: { id: userID },
        relations: { stacks: true },
      })
      .catch(() => {
        throw new UserNotFoundException(userID);
      });

    await this.userRepository.delete(user);
  }
}
