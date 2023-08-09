import {
  ArrayMaxSize,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class UpdateMeRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  bio: string;

  @IsOptional()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  @ArrayMaxSize(5)
  stacks: string[];

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  githubID: string;

  @IsOptional()
  @IsUrl()
  portfolioURL: string;
}
