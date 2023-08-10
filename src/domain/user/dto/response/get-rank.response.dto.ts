import { Stat } from '../../entities';
import { SchoolType } from '../../enums';

type RankElementDto = {
  readonly name: string;
  readonly school: SchoolType;
  readonly admissionYear: number;
  readonly commitCount: number;
  readonly score: number;
};

export class GetRankResponseDto {
  public readonly rank: RankElementDto[];

  public static of(stats: Stat[]): GetRankResponseDto {
    return {
      rank: stats.map(
        (stat): RankElementDto => ({
          admissionYear: stat.user.admissionYear,
          school: stat.user.schoolType,
          commitCount: stat.contributionCount,
          name: stat.user.name,
          score: stat.score,
        }),
      ),
    };
  }
}
