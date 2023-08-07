import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { PasswordManager } from '../utils';
import { UpdatePasswordRequestDto } from '../dto/request';
import {
  IncorrectPasswordException,
  UserNotFoundException,
} from '../exceptions';

@Injectable()
export class UpdatePasswordService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordManager: PasswordManager,
  ) {}

  async execute(
    userID: number,
    request: UpdatePasswordRequestDto,
  ): Promise<void> {
    const { currentPassword, newPassword } = request;
    const user = await this.userRepository
      .findOneOrFail({
        where: { id: userID },
        relations: { stacks: true },
      })
      .catch(() => {
        throw new UserNotFoundException(userID);
      });

    if (await this.isPasswordIncorrect(currentPassword, user.password)) {
      throw new IncorrectPasswordException();
    }

    user.password = await this.passwordManager.encode(newPassword);
    await this.userRepository.save(user);
  }

  private async isPasswordIncorrect(
    candidate: string,
    password: string,
  ): Promise<boolean> {
    const isCorrect = await this.passwordManager.compare(candidate, password);
    return !isCorrect;
  }
}
