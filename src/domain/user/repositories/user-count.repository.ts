import { DataSource, Repository } from 'typeorm';
import { UserCount } from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCountRepository extends Repository<UserCount> {
  constructor(private dataSource: DataSource) {
    super(UserCount, dataSource.createEntityManager());
  }
}
