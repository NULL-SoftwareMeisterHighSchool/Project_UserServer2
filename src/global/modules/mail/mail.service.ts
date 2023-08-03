import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async send(to: string, subject: string, content: string): Promise<void> {
    await this.mailerService.sendMail({
      to: to,
      from: 'noreplay@gmail.com',
      subject: subject,
      text: content,
      html: content,
    });
  }
}
