import { ConflictException } from '@nestjs/common';

export class DuplicateAccountNameException extends ConflictException {
  constructor(accountName: string) {
    super(`${accountName}은 이미 사용중인 아이디입니다.`);
  }
}
