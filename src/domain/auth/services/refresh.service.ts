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

    let payload: UserInfo;
    try {
      await this.checkBlacklisted(refreshToken);
      payload = this.jwtService.verify<UserInfo>(refreshToken);
    } catch (e) {
      throw new InvalidRefreshTokenException();
    }

    const now = Date.now();
    const expiresIn = JwtConfig.accessExpiresIn;
    delete payload['exp'];
    delete payload['iat'];

    const token = this.jwtService.sign(payload, {
      secret: JwtConfig.secret,
      expiresIn: expiresIn,
    });

    return {
      expiresAt: now + expiresIn * 1000,
      accessToken: token,
    };
  }

  private async checkBlacklisted(token: string): Promise<void> {
    const isBlacklisted = await this.blacklistManager.exists(token);
    if (isBlacklisted) throw undefined;
  }
}
