import { BadRequestException } from '@nestjs/common';
import { EMAIL_SUFFIXES } from '../constants/email-suffixes.constant';

export class InvalidEmailException extends BadRequestException {
  constructor() {
    super(`이메일은 [${EMAIL_SUFFIXES}] 만 사용할 수 있습니다`);
  }
}
