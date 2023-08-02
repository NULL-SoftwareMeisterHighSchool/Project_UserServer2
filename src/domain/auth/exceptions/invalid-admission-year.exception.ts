import { BadRequestException } from '@nestjs/common';

export class InvalidAdmissionYearException extends BadRequestException {
  constructor() {
    super('입학일자가 범위를 벗어났습니다');
  }
}
