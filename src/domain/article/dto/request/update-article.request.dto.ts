import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateArticleRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
