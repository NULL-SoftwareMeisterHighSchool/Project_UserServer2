import { UnauthorizedException } from '@nestjs/common';

export class InvalidRefreshTokenException extends UnauthorizedException {
  constructor() {
    super('refreshToken이 유효하지 않습니다');
  }
}
