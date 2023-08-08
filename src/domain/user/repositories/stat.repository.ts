import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Stat, User } from '../entities';
import { SchoolType } from '../enums';

@Injectable()
export class StatRepository extends Repository<Stat> {
  constructor(private readonly dataSource: DataSource) {
    super(Stat, dataSource.createEntityManager());
  }

  async getRank(
    size: number,
    school?: SchoolType,
    grade?: number,
  ): Promise<Stat[]> {
    let qb = await this.dataSource
      .createQueryBuilder(Stat, 'stat')
      .innerJoinAndMapOne('stat.user', User, 'user', 'stat.id = user.id')
      .where('1=1');

    if (school) qb = qb.andWhere('user.schoolType = :school', { school });
    if (grade)
      qb = qb.andWhere(':thisYear - user.admissionYear + 1 = :grade', {
        thisYear: new Date().getFullYear(),
        grade: grade,
      });

    return await qb.orderBy('stat.score', 'DESC').limit(size).getMany();
  }
}
