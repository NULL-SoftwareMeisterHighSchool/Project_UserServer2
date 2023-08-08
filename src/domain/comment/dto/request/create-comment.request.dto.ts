import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentRequestDto {
  @IsNotEmpty()
  @IsString()
  body: string;
}
