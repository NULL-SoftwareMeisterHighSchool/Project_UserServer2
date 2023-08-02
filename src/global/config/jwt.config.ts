import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtModuleConfig: JwtModuleOptions = {
  global: true,
  verifyOptions: { ignoreExpiration: false },
  secret: process.env.JWT_SECRET,
};

export const JwtConfig = {
  secret: process.env.JWT_SECRET,
  accessExpiresIn: 60 * 60 * 1000, // 1h
  refreshExpiresIn: 7 * 24 * 60 * 60 * 1000, // 7d
};
