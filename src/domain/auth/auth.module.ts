import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PasswordManager } from './utils';
import { LoginService, StudentSignupService } from './services';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    // services
    StudentSignupService,
    LoginService,

    // utils
    PasswordManager,
  ],
})
export class AuthModule {}
