import { Injectable } from '@nestjs/common';
import { BlacklistManager } from '../utils';
import { JwtService } from '@nestjs/jwt';
import { RefreshRequestDto } from '../dto/request';
import { RefreshResponseDto } from '../dto/response';
import { UserInfo } from 'src/global/types/user-info.type';
import { InvalidRefreshTokenException } from '../exceptions';
import { JwtConfig } from 'src/global/config';
import { convertToKorMilli } from 'src/global/util/lib';

@Injectable()
export class RefreshService {
  constructor(
    private readonly blacklistManager: BlacklistManager,
    private readonly jwtService: JwtService,
  ) {}

  async execute(request: RefreshRequestDto): Promise<RefreshResponseDto> {
    const { refreshToken } = request;

    const isBlacklisted = await this.blacklistManager.exists(refreshToken);
    const payload = this.jwtService.verify<UserInfo>(refreshToken);
    if (payload == null || isBlacklisted) {
      throw new InvalidRefreshTokenException();
    }

    const now = Date.now();
    const expiresIn = JwtConfig.accessExpiresIn;

    const token = this.jwtService.sign(payload, {
      secret: JwtConfig.secret,
      expiresIn: expiresIn,
    });

    return {
      expiresAt: convertToKorMilli(now + expiresIn),
      accessToken: token,
    };
  }
}
