import { NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`아이디가 ${id}인 유저는 존재하지 않습니다`);
  }
}
