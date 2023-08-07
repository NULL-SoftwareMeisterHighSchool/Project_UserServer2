import { ForbiddenException } from '@nestjs/common';

export class IncorrectPasswordException extends ForbiddenException {
  constructor() {
    super('현재 비밀번호가 틀렸습니다');
  }
}
