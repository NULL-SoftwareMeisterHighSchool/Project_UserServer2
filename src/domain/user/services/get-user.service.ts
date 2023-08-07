import { Injectable } from '@nestjs/common';
import { GetUserResponseDto } from '../dto/response';
import { UserRepository } from '../repositories';
import { UserNotFoundException } from '../exceptions';

@Injectable()
export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userID: number): Promise<GetUserResponseDto> {
    const user = await this.userRepository
      .findOneOrFail({
        where: { id: userID },
        relations: { stacks: true },
      })
      .catch(() => {
        throw new UserNotFoundException(userID);
      });

    return GetUserResponseDto.of(user);
  }
}
