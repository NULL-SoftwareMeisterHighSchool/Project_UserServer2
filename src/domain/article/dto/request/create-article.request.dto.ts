import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ArticleType } from '../../enum';

export class CreateArticleRequestDto {
  @IsNotEmpty()
  @IsEnum(ArticleType)
  type: ArticleType;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
