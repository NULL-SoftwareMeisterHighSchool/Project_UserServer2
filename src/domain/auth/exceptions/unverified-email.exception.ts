import { BadRequestException } from '@nestjs/common';

export class UnverifiedEmailException extends BadRequestException {
  constructor() {
    super('인증되지 않은 이메일입니다');
  }
}
