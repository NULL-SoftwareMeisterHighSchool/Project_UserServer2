import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class VerifyRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  code: string;
}
