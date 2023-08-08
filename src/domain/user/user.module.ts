import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stack, Stat, User } from './entities';
import {
  StackRepository,
  StatRepository,
  UserRepository,
} from './repositories';
import { UserController } from './user.controller';
import {
  GetMyStatService,
  GetRankService,
  GetUserService,
  UpdatePasswordService,
  UpdateUserService,
  WithdrawService,
} from './services';
import { PasswordManager } from './utils';

@Module({
  imports: [TypeOrmModule.forFeature([Stack, Stat, User])],
  controllers: [UserController],
  providers: [
    // services
    GetUserService,
    UpdateUserService,
    GetMyStatService,
    UpdatePasswordService,
    WithdrawService,
    GetRankService,

    // utils
    PasswordManager,

    // repositories
    StackRepository,
    StatRepository,
    UserRepository,
  ],
  exports: [UserRepository, PasswordManager],
})
export class UserModule {}
