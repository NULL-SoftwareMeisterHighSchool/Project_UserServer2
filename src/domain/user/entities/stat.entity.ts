import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Stat {
  // should change when typeorm supports primary key column for OneToOne join column
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ default: '0' })
  contributionCount: number;

  @Column({ default: '0' })
  starCount: number;

  @Column({ default: '0' })
  issueCount: number;

  @Column({ default: '0' })
  pullRequestCount: number;

  @Column({ default: '0' })
  contributedRepositoryCount: number;

  @OneToOne(() => User, (user) => user.stat)
  user: User;
}
