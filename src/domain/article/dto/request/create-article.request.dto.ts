import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { ArticleType } from '../../enum';

export class CreateArticleRequestDto {
  @IsNotEmpty()
  @IsEnum(ArticleType)
  type: ArticleType;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsBoolean()
  isPrivate: boolean;
}
