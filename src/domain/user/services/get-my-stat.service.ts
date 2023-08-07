import { Injectable } from '@nestjs/common';
import { StatRepository } from '../repositories';
import { UserNotFoundException } from '../exceptions';
import { GetMyStatResponseDto } from '../dto/response';

@Injectable()
export class GetMyStatService {
  constructor(private readonly statRepository: StatRepository) {}

  async execute(userID: number): Promise<GetMyStatResponseDto> {
    const stat = await this.statRepository
      .findOneByOrFail({ id: userID })
      .catch(() => {
        throw new UserNotFoundException(userID);
      });

    return GetMyStatResponseDto.of(stat);
  }
}
