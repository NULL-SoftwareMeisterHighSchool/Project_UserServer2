import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendMailRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
