import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/global/modules/cache/cache.service';
import { MailService } from 'src/global/modules/mail/mail.service';
import { v4 as newUUID } from 'uuid';

@Injectable()
export class MailVerificationManager {
  private readonly PREFIX = 'mail';
  private readonly VERIFIED = 'OK';
  private readonly EXPIRES_IN = 60 * 60 * 1000; // 1h

  constructor(
    private readonly mailService: MailService,
    private readonly cacheService: CacheService,
  ) {}

  async sendVerification(email: string): Promise<void> {
    const code = newUUID();
    await this.cacheService.set(this.PREFIX, email, code, this.EXPIRES_IN);
    await this.mailService.send(
      email,
      '소마인 이메일 인증',
      `귀하의 인증 코드는 <b>${code}</b> 입니다.`,
    );
  }

  async isVerified(email: string): Promise<boolean> {
    const value = await this.cacheService.get(this.PREFIX, email);
    return value === this.VERIFIED;
  }

  async verify(email: string): Promise<void> {
    await this.cacheService.set(
      this.PREFIX,
      email,
      this.VERIFIED,
      this.EXPIRES_IN,
    );
  }

  async check(email: string, code: string): Promise<boolean> {
    const value = await this.cacheService.get(this.PREFIX, email);
    return value === code;
  }
}
