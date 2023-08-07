import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stack, Stat, User } from './entities';
import {
  StackRepository,
  StatRepository,
  UserRepository,
} from './repositories';
import { UserController } from './user.controller';
import { GetUserService, UpdateUserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Stack, Stat, User])],
  controllers: [UserController],
  providers: [
    // services
    GetUserService,
    UpdateUserService,

    // repositories
    StackRepository,
    StatRepository,
    UserRepository,
  ],
  exports: [UserRepository],
})
export class UserModule {}
