import { BadRequestException } from '@nestjs/common';

export class EmailCodeMismatchException extends BadRequestException {
  constructor() {
    super('요청한 이메일에 대한 인증코드가 없거나 일치하지 않습니다');
  }
}
