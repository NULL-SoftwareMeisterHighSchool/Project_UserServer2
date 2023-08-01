import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Stack {
  @PrimaryColumn()
  name: string;
}
