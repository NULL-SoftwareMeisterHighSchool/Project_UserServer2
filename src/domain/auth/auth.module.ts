import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PasswordManager } from './utils';
import { StudentSignupService } from './services';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    // services
    StudentSignupService,

    // utils
    PasswordManager,
  ],
})
export class AuthModule {}
