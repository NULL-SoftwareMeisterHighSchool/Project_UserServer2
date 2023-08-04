import { Global, Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtModuleConfig } from 'src/global/config';

@Global()
@Module({
  imports: [
    NestJwtModule.registerAsync({ useFactory: () => JwtModuleConfig() }),
  ],
  exports: [NestJwtModule],
})
export class JwtModule {}
