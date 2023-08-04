import { MailerOptions } from '@nestjs-modules/mailer';

export const MailConfig = (): MailerOptions => ({
  preview: false,
  transport: {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  },
});
