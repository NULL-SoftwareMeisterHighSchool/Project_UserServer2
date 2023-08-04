import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtModuleConfig = (): JwtModuleOptions => {
  JwtConfig = {
    secret: process.env.JWT_SECRET,
    accessExpiresIn: 60 * 60, // 1h
    refreshExpiresIn: 7 * 24 * 60 * 60, // 7d
  };

  return {
    global: true,
    verifyOptions: { ignoreExpiration: false },
    secret: process.env.JWT_SECRET,
  };
};

type IJwtConfig = {
  secret: string;
  accessExpiresIn: number;
  refreshExpiresIn: number;
};
export let JwtConfig: IJwtConfig;
