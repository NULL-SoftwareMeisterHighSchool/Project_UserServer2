import { Stat } from '../../entities';

export class GetMyStatResponseDto {
  public readonly contributionCount: number;
  public readonly starCount: number;
  public readonly issueCount: number;
  public readonly pullRequestCount: number;
  public readonly contributedRepositoryCount: number;
  public readonly score: number;

  public static of(stat: Stat): GetMyStatResponseDto {
    return {
      contributedRepositoryCount: stat.contributedRepositoryCount,
      contributionCount: stat.contributionCount,
      issueCount: stat.issueCount,
      pullRequestCount: stat.pullRequestCount,
      starCount: stat.starCount,
      score: stat.score,
    };
  }
}
