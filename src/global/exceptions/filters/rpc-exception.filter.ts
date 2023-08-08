import {
  ArgumentsHost,
  Catch,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ServiceError } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';

@Catch()
export class RPCExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if (exception as ServiceError) {
      const e = exception as ServiceError;
      switch (e.code) {
        case Status.UNKNOWN:
          exception = new InternalServerErrorException(e.message);
          break;
        case Status.NOT_FOUND:
          exception = new NotFoundException(e.message);
          break;
        case Status.PERMISSION_DENIED:
          exception = new ForbiddenException(e.message);
          break;
      }
    }
    super.catch(exception, host);
  }
}
