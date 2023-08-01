import { DataSource, Repository } from 'typeorm';
import { Stack } from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StackRepository extends Repository<Stack> {
  constructor(private readonly dataSource: DataSource) {
    super(Stack, dataSource.createEntityManager());
  }
}
