import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { BlacklistManager, PasswordManager } from './utils';
import { LoginService, LogoutService, StudentSignupService } from './services';
import { MailModule } from 'src/global/modules/mail/mail.module';
import { CacheModule } from 'src/global/modules/cache/cache.module';

@Module({
  imports: [UserModule, CacheModule, MailModule],
  controllers: [AuthController],
  providers: [
    // services
    StudentSignupService,
    LoginService,
    LogoutService,

    // utils
    PasswordManager,
    BlacklistManager,
  ],
})
export class AuthModule {}
