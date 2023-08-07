import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordRequestDto {
  @IsNotEmpty()
  @IsString()
  currentPassword: string;

  @IsNotEmpty()
  @IsString()
  newPassword: string;
}
