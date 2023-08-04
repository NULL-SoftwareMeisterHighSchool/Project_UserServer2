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
    expiresIn: number,
  ): Promise<void> {
    await this.cache.set(`${prefix}:${key}`, value, expiresIn);
  }

  async get(prefix: string, key: string): Promise<string> {
    return await this.cache.get<string>(`${prefix}:${key}`);
  }

  async has(prefix: string, key: string): Promise<boolean> {
    const value = await this.cache.get<string>(`${prefix}:${key}`);
    return value != null;
  }
}
