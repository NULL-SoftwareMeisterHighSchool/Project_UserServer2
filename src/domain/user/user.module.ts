import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stack, Stat, User } from './entities';
import {
  StackRepository,
  StatRepository,
  UserRepository,
} from './repositories';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Stack, Stat, User])],
  controllers: [UserController],
  providers: [StackRepository, StatRepository, UserRepository],
  exports: [UserRepository],
})
export class UserModule {}
