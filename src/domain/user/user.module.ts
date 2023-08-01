import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stack, Stat, User } from './entities';
import {
  StackRepository,
  StatRepository,
  UserRepository,
} from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Stack, Stat, User])],
  controllers: [UserController],
  providers: [StackRepository, StatRepository, UserRepository],
})
export class UserModule {}
