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

    let payload: UserInfo;
    try {
      await this.checkBlacklisted(refreshToken);
      payload = this.jwtService.verify<UserInfo>(refreshToken);
    } catch (e) {
      throw new InvalidRefreshTokenException();
    }
    const expiresAt = parseInt(payload['exp']);
    await this.blacklistManager.set(refreshToken, expiresAt);
  }

  private async checkBlacklisted(token: string): Promise<void> {
    const isBlacklisted = await this.blacklistManager.exists(token);
    if (isBlacklisted) throw undefined;
  }
}
