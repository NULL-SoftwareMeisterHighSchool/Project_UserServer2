import { Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { ExampleService } from './services';

@Controller('auth')
export class AuthController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  getHello(): string {
    return this.exampleService.doSomething();
  }

  @Post()
  thisAlwaysFails(): void {
    throw new NotFoundException('you knew it will fail');
  }
}
