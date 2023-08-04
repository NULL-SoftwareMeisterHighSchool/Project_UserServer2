import { Column, Entity, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Stat {
  @Column()
  contributionCount: number;

  @Column()
  starCount: number;

  @Column()
  issueCount: number;

  @Column()
  pullRequestCount: number;

  @Column()
  contributedRepositoryCount: number;

  @OneToOne(() => User)
  user: User;
}
