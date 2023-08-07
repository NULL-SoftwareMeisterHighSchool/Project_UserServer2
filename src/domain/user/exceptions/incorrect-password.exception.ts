import { BadRequestException } from '@nestjs/common';

export class IncorrectPasswordException extends BadRequestException {
  constructor() {
    super('현재 비밀번호가 틀렸습니다');
  }
}
