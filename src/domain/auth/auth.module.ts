import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { BlacklistManager, MailVerificationManager } from './utils';
import {
  LoginService,
  LogoutService,
  RefreshService,
  ResetPasswordService,
  SendMailService,
  StudentSignupService,
  VerifyService,
} from './services';
import { MailModule } from 'src/global/modules/mail/mail.module';
import { CacheModule } from 'src/global/modules/cache/cache.module';
import { GRPCModule } from 'src/global/modules/grpc/grpc.module';

@Module({
  imports: [UserModule, CacheModule, MailModule, GRPCModule],
  controllers: [AuthController],
  providers: [
    // services
    StudentSignupService,
    LoginService,
    LogoutService,
    RefreshService,
    SendMailService,
    VerifyService,
    ResetPasswordService,

    // utils
    BlacklistManager,
    MailVerificationManager,
  ],
})
export class AuthModule {}
