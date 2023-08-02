import { BadRequestException } from '@nestjs/common';
import { SchoolType } from 'src/domain/user/enums';

export class SchoolEmailMismatchException extends BadRequestException {
  constructor(email: string, school: SchoolType) {
    super(`${email}은 학교: ${school}에 맞지 않는 이메일입니다.`);
  }
}
