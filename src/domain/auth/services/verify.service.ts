import { Injectable } from '@nestjs/common';
import { MailVerificationManager } from '../utils';
import { VerifyRequestDto } from '../dto/request';
import { EmailCodeMismatchException } from '../exceptions';

@Injectable()
export class VerifyService {
  constructor(
    private readonly mailVerificationManager: MailVerificationManager,
  ) {}

  async execute(request: VerifyRequestDto): Promise<void> {
    const { code, email } = request;

    const matches = await this.mailVerificationManager.check(email, code);
    if (!matches) {
      throw new EmailCodeMismatchException();
    }

    await this.mailVerificationManager.verify(email);
  }
}
