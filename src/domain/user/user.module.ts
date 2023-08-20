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
  ListPrivateArticleService,
  UpdatePasswordService,
  UpdateUserService,
  WithdrawService,
} from './services';
import { PasswordManager } from './utils';
import { GRPCModule } from 'src/global/modules/grpc/grpc.module';
import { UpdateGithubStatService } from './schedule/update-github-stat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Stack, Stat, User]), GRPCModule],
  controllers: [UserController],
  providers: [
    // services
    GetUserService,
    UpdateUserService,
    GetMyStatService,
    UpdatePasswordService,
    WithdrawService,
    GetRankService,
    UpdateGithubStatService,
    ListPrivateArticleService,

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
