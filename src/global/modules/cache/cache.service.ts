import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async set(
    prefix: string,
    key: string,
    value: string,
    expiresInMs: number,
  ): Promise<void> {
    const expiresIn = expiresInMs / 1000;
    await this.cache.set(`${prefix}:${key}`, value, expiresIn);
  }

  async get(prefix: string, key: string): Promise<string> {
    return await this.cache.get(`${prefix}:${key}`);
  }
}
