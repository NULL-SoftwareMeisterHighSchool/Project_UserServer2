import { Injectable } from '@nestjs/common';
import { MailVerificationManager } from '../utils';
import { SendMailRequestDto } from '../dto/request';

@Injectable()
export class SendMailService {
  constructor(
    private readonly mailVerificationManager: MailVerificationManager,
  ) {}

  async execute(request: SendMailRequestDto): Promise<void> {
    const { email } = request;

    await this.mailVerificationManager.sendVerification(email);
  }
}
