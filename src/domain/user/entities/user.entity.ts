import {
  Column,
  Entity,
  JoinTable,
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

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  portfolioURL: string;

  @Column({ unique: true })
  email: string;

  @Column()
  admissionYear: number;

  @Column({ enum: SchoolType, type: 'enum' })
  schoolType: SchoolType;

  @OneToOne(() => Stat, (stat) => stat.user, { cascade: true })
  stat: Stat;

  @ManyToMany(() => Stack, { cascade: ['insert'] })
  @JoinTable({ name: 'user_stack' })
  stacks: Stack[];
}
