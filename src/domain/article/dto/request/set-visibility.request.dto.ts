import { IsBoolean, IsNotEmpty } from 'class-validator';

export class SetVisibilityReqeustDto {
  @IsNotEmpty()
  @IsBoolean()
  isPrivate: boolean;
}
