import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/global/modules/cache/cache.service';

@Injectable()
export class BlacklistManager {
  private readonly PREFIX = 'blacklist';

  constructor(private readonly cacheService: CacheService) {}

  async set(token: string, expiresAt: number): Promise<void> {
    const expiresIn = expiresAt - new Date().getSeconds();
    await this.cacheService.set(this.PREFIX, token, '', expiresIn);
  }

  async exists(token: string): Promise<boolean> {
    return await this.cacheService.has(this.PREFIX, token);
  }
}
