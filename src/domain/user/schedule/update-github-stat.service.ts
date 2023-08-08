import { Injectable } from '@nestjs/common';
import { StatRepository, UserRepository } from '../repositories';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserClient } from 'src/global/modules/grpc/clients';
import { Stat } from '../entities';
import { users } from 'src/global/grpc/types/users/service';

@Injectable()
export class UpdateGithubStatService {
  private readonly BATCH_SIZE = 100;
  private batchSequence = 1;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly statRepository: StatRepository,
    private readonly userClient: UserClient,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async execute(): Promise<void> {
    const users = await this.userRepository.find({
      skip: (this.batchSequence - 1) * this.BATCH_SIZE,
      take: this.BATCH_SIZE,
      select: {
        id: true,
        githubID: true,
      },
    });

    if (users.length < this.BATCH_SIZE) this.batchSequence = 0;
    this.batchSequence++;

    const stats = await this.userClient.getGithubInfo(
      users.map((user) => ({ userID: user.id, userLogin: user.githubID })),
    );

    await this.statRepository
      .createQueryBuilder('stat')
      .insert()
      .into(Stat)
      .values(
        stats.map((stat) =>
          this.statRepository.create({
            id: stat.userID,
            contributedRepositoryCount: stat.contributedRepositoryCount,
            contributionCount: stat.contributionCount,
            issueCount: stat.issueCount,
            pullRequestCount: stat.pullRequestCount,
            starCount: stat.starCount,
            score: this.calculateScore(stat),
          }),
        ),
      )
      .orUpdate(
        [
          'contributedRepositoryCount',
          'contributionCount',
          'issueCount',
          'pullRequestCount',
          'starCount',
          'score',
        ],
        ['id'],
      );
  }

  private calculateScore(stat: users.GithubStats): number {
    return (
      stat.contributionCount * 2 +
      stat.contributedRepositoryCount * 15 +
      stat.issueCount * 20 +
      stat.pullRequestCount * 10 +
      stat.starCount * 100
    );
  }
}
