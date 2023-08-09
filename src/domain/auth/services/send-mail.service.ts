import { Injectable } from '@nestjs/common';
import { MailVerificationManager } from '../utils';
import { SendMailRequestDto } from '../dto/request';
import { EMAIL_SUFFIXES } from '../constants';
import { InvalidEmailException } from '../exceptions';

@Injectable()
export class SendMailService {
  constructor(
    private readonly mailVerificationManager: MailVerificationManager,
  ) {}

  async execute(request: SendMailRequestDto): Promise<void> {
    const { email } = request;

    if (this.isEmailInvalid(email)) {
      throw new InvalidEmailException();
    }

    await this.mailVerificationManager.sendVerification(email);
  }

  private isEmailInvalid(email: string): boolean {
    const [, suffix] = email.split('@');

    const includes = Object.values(EMAIL_SUFFIXES).includes(suffix);
    return !includes;
  }
}
