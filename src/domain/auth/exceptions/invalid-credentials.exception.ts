import { UnauthorizedException } from '@nestjs/common';

export class InvalidCredentialsException extends UnauthorizedException {
  constructor() {
    super('아이디나 비밀번호가 맞지 않습니다');
  }
}
