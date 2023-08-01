import { Column, Entity, ManyToMany, OneToOne } from 'typeorm';
import { SchoolType } from '../enums';
import { Stack } from './stack.entity';

@Entity()
export class User {
  @Column()
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

  @OneToOne(() => User)
  user: User;

  @ManyToMany(() => Stack)
  stacks: Stack[];
}
