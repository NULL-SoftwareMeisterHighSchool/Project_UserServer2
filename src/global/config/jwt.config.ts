import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfig: JwtModuleOptions = {
  global: true,
  verifyOptions: { ignoreExpiration: false },
  secret: process.env.JWT_SECRET,
};
