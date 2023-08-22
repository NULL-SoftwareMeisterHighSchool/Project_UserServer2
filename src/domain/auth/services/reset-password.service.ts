import { Injectable } from '@nestjs/common';
import { MailVerificationManager } from '../utils';
import { VerifyRequestDto } from '../dto/request';
import { PasswordResponseDto } from '../dto/response';
import { EmailCodeMismatchException } from '../exceptions';
import { UserRepository } from 'src/domain/user/repositories';
import { PasswordManager } from 'src/domain/user/utils';
import { UserNotFoundException } from 'src/domain/user/exceptions';
import { randomBytes } from 'crypto';

@Injectable()
export class ResetPasswordService {
  constructor(
    private readonly mailVerificationManager: MailVerificationManager,
    private readonly userRepository: UserRepository,
    private readonly passwordManager: PasswordManager,
  ) {}

  async execute(request: VerifyRequestDto): Promise<PasswordResponseDto> {
    const { code, email } = request;

    const matches = await this.mailVerificationManager.check(email, code);
    if (!matches) {
      throw new EmailCodeMismatchException();
    }

    const user = await this.userRepository
      .findOneByOrFail({ email })
      .catch(() => {
        throw new UserNotFoundException(0);
      });

    const password = randomBytes(20).toString();
    const hashed = await this.passwordManager.encode(password);

    user.password = hashed;
    await this.userRepository.save(user);

    return {
      password: password,
    };
  }
}
