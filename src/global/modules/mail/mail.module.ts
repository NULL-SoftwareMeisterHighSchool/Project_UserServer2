import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailConfig } from 'src/global/config';
import { MailService } from './mail.service';

@Module({
  imports: [MailerModule.forRootAsync({ useFactory: () => MailConfig() })],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
