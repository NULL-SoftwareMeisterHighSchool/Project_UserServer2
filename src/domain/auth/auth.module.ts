import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ExampleService } from './services';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [ExampleService],
})
export class AuthModule {}
