import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Stat } from '../entities';

@Injectable()
export class StatRepository extends Repository<Stat> {
  constructor(private readonly dataSource: DataSource) {
    super(Stat, dataSource.createEntityManager());
  }
}
