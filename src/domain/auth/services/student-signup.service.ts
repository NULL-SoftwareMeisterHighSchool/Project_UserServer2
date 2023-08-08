import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { StudentSignupRequestDto } from '../dto/request';
import { UserRepository } from 'src/domain/user/repositories';
import { EMAIL_SUFFIXES, SCHOOL_FOUNDATIONS } from '../constants';
import { SchoolType } from 'src/domain/user/enums';
import {
  DuplicateAccountNameException,
  InvalidAdmissionYearException,
  InvalidEmailException,
  SchoolEmailMismatchException,
  UnverifiedEmailException,
} from '../exceptions';
import { MailVerificationManager } from '../utils';
import { Stat } from 'src/domain/user/entities';
import { PasswordManager } from 'src/domain/user/utils';
import { UserClient } from 'src/domain/user/client/user.client';

@Injectable()
export class StudentSignupService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordManager: PasswordManager,
    private readonly mailVerificationManager: MailVerificationManager,
    private readonly userClient: UserClient,
  ) {}

  async execute(request: StudentSignupRequestDto): Promise<void> {
    if (this.isEmailInvalid(request.email)) {
      throw new InvalidEmailException();
    }

    if (this.isEmailWrongSchool(request.school, request.email)) {
      throw new SchoolEmailMismatchException(request.email, request.school);
    }

    if (this.isYearInvalid(request.school, request.admissionYear)) {
      throw new InvalidAdmissionYearException();
    }

    if (await this.isEmailUnverified(request.email)) {
      throw new UnverifiedEmailException();
    }

    if (await this.isDuplicateAccountName(request.accountName)) {
      throw new DuplicateAccountNameException(request.accountName);
    }

    const password = await this.passwordManager.encode(request.password);

    const user = await this.userRepository.create({
      password: password,
      accountName: request.accountName,
      admissionYear: request.admissionYear,
      email: request.email,
      githubID: request.githubID,
      name: request.name,
      schoolType: request.school,
      stat: new Stat(),
    });
    const { id } = await this.userRepository.save(user);
    await this.userClient.createUser(id).catch((msg: string) => {
      throw new InternalServerErrorException(msg);
    });
  }

  private isEmailWrongSchool(school: SchoolType, email: string): boolean {
    const [, suffix] = email.split('@');

    return EMAIL_SUFFIXES[school] !== suffix;
  }

  private isEmailInvalid(email: string): boolean {
    const [, suffix] = email.split('@');

    const includes = Object.values(EMAIL_SUFFIXES).includes(suffix);
    return !includes;
  }

  private isYearInvalid(school: SchoolType, admissionYear: number): boolean {
    const min = SCHOOL_FOUNDATIONS[school];
    const max = new Date().getFullYear();

    return admissionYear < min || admissionYear > max;
  }

  private async isEmailUnverified(email: string): Promise<boolean> {
    const verified = await this.mailVerificationManager.isVerified(email);
    return !verified;
  }

  private async isDuplicateAccountName(accountName: string): Promise<boolean> {
    return await this.userRepository.exist({ where: { accountName } });
  }
}
