import { UnauthorizedException as NestUnauthorizedExeption } from '@nestjs/common';

export class UnauthorizedException extends NestUnauthorizedExeption {
  constructor() {
    super('유효하지 않은 엑세스 토큰입니다');
  }
}
