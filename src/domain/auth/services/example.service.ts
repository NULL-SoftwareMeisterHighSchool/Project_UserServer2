import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  doSomething = (): string => {
    return 'hello world!';
  };
}
