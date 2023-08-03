import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailConfig } from 'src/global/config';

@Module({
  imports: [MailerModule.forRoot(MailConfig)],
  providers: [],
})
export class MailModule {}
