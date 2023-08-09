import { Injectable } from '@nestjs/common';
import { StackRepository, UserRepository } from '../repositories';
import { UpdateMeRequestDto } from '../dto/request';
import { UserNotFoundException } from '../exceptions';
import { Stack } from '../entities';

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly stackRepository: StackRepository,
  ) {}

  async execute(userID: number, request: UpdateMeRequestDto): Promise<void> {
    const user = await this.userRepository
      .findOneOrFail({
        where: { id: userID },
        relations: { stacks: true },
      })
      .catch(() => {
        throw new UserNotFoundException(userID);
      });

    if (request.bio) user.bio = request.bio;
    if (request.githubID) user.githubID = request.githubID;
    if (request.portfolioURL) user.portfolioURL = request.portfolioURL;

    if (request.stacks.length > 0) {
      const stacks = request.stacks.map(
        (stackName): Stack => this.stackRepository.create({ name: stackName }),
      );
      await this.stackRepository.upsert(stacks, {
        conflictPaths: { name: true },
      });
      user.stacks = stacks;
    }

    await this.userRepository.save(user);
  }
}
