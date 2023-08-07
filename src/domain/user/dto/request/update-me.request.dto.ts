import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateMeRequestDto {
  @IsOptional()
  @IsString()
  bio: string;

  @IsOptional()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  stacks: string[];

  @IsOptional()
  @IsUrl()
  githubURL: string;

  @IsOptional()
  @IsUrl()
  portfolioURL: string;
}
