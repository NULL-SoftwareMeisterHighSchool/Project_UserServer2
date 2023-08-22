import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stack, Stat, User, UserCount } from './entities';
import {
  StackRepository,
  StatRepository,
  UserCountRepository,
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
import { LogUserCountService } from './schedule/log-user.count.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stack, Stat, User, UserCount]),
    GRPCModule,
  ],
  controllers: [UserController],
  providers: [
    // services
    GetUserService,
    UpdateUserService,
    GetMyStatService,
    UpdatePasswordService,
    WithdrawService,
    ListPrivateArticleService,
    UpdateGithubStatService,

    GetRankService,
    LogUserCountService,

    // utils
    PasswordManager,

    // repositories
    StackRepository,
    StatRepository,
    UserRepository,
    UserCountRepository,
  ],
  exports: [UserRepository, PasswordManager],
})
export class UserModule {}
