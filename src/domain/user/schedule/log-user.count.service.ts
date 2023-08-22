import { Injectable } from '@nestjs/common';
import { UserCountRepository, UserRepository } from '../repositories';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class LogUserCountService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userCountRepository: UserCountRepository,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_8AM)
  async execute(): Promise<void> {
    const count = await this.userRepository.count();

    await this.userCountRepository.save({ count });
  }
}
