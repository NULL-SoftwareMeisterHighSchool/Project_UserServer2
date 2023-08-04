import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/user/repositories';
import { LoginResponseDto } from '../dto/response';
import { LoginRequestDto } from '../dto/request';
import { InvalidCredentialsException } from '../exceptions';
import { PasswordManager } from '../utils';
import { JwtService } from '@nestjs/jwt';
import { UserInfo } from 'src/global/types/user-info.type';
import { JwtConfig } from 'src/global/config';
import { convertToKorMilli } from 'src/global/util/lib';

@Injectable()
export class LoginService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordManager: PasswordManager,
    private readonly jwtService: JwtService,
  ) {}

  async execute(request: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.userRepository
      .findOneByOrFail({ accountName: request.id })
      .catch(() => {
        throw new InvalidCredentialsException();
      });

    if (await this.isInvalidPassword(request.password, user.password)) {
      throw new InvalidCredentialsException();
    }

    const userInfo: UserInfo = { ...user };
    const now = Date.now();

    const { accessExpiresIn, refreshExpiresIn } = JwtConfig;

    return {
      access: {
        token: this.genToken(userInfo, accessExpiresIn),
        expiresAt: convertToKorMilli(now + accessExpiresIn),
      },
      refresh: {
        token: this.genToken(userInfo, refreshExpiresIn),
        expiresAt: convertToKorMilli(now + refreshExpiresIn),
      },
    };
  }

  private async isInvalidPassword(
    candidate: string,
    password: string,
  ): Promise<boolean> {
    const matches = await this.passwordManager.compare(candidate, password);
    return !matches;
  }

  private genToken(userInfo: UserInfo, expiresIn: number): string {
    return this.jwtService.sign(userInfo, {
      secret: JwtConfig.secret,
      expiresIn: expiresIn,
    });
  }
}
