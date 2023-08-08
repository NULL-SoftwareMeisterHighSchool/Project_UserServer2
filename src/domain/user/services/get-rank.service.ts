import { Injectable } from '@nestjs/common';
import { StatRepository } from '../repositories';
import { SchoolType } from '../enums';
import { GetRankResponseDto } from '../dto/response';

@Injectable()
export class GetRankService {
  constructor(private readonly statRepository: StatRepository) {}

  async execute(
    size: number,
    school?: SchoolType,
    grade?: number,
  ): Promise<GetRankResponseDto> {
    const stats = await this.statRepository.getRank(size, school, grade);
    return GetRankResponseDto.of(stats);
  }
}
