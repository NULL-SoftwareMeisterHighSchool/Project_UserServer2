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
  GetUserService,
  UpdateUserService,
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
