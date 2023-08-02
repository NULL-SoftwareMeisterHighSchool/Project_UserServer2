import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SchoolType } from '../enums';
import { Stack } from './stack.entity';
import { Stat } from './stat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unique: true })
  accountName: string;

  @Column()
  password: string;

  @Column()
  githubID: string;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column()
  githubURL: string;

  @Column()
  portfolioURL: string;

  @Column({ unique: true })
  email: string;

  @Column()
  admissionYear: number;

  @Column({ enum: SchoolType })
  schoolType: SchoolType;

  @OneToOne(() => Stat, { cascade: true })
  stat: Stat;

  @ManyToMany(() => Stack)
  stacks: Stack[];
}
