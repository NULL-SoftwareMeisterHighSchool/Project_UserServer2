import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Stat {
  @PrimaryColumn()
  userId: number;

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

  @OneToOne(() => User, (user) => user.stat)
  user: User;
}
