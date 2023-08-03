import { Injectable } from '@nestjs/common';
import { BlacklistManager } from '../utils';
import { JwtService } from '@nestjs/jwt';
import { RefreshRequestDto } from '../dto/request';
import { UserInfo } from 'src/global/types/user-info.type';
import { InvalidRefreshTokenException } from '../exceptions';

@Injectable()
export class LogoutService {
  constructor(
    private readonly blacklistManager: BlacklistManager,
    private readonly jwtService: JwtService,
  ) {}

  async execute(reqeust: RefreshRequestDto): Promise<void> {
    const { refreshToken } = reqeust;

    const isBlacklisted = await this.blacklistManager.exists(refreshToken);
    const payload = this.jwtService.verify<UserInfo>(refreshToken);
    if (payload == null || isBlacklisted) {
      throw new InvalidRefreshTokenException();
    }

    const decoded = this.jwtService.decode(refreshToken);
    const expiresAt = parseInt(decoded['exp']);
    await this.blacklistManager.set(refreshToken, expiresAt);
  }
}
