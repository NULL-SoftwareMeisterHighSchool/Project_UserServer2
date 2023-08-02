import { Injectable } from '@nestjs/common';
import { StudentSignupRequestDto } from '../dto/request';
import { UserRepository } from 'src/domain/user/repositories';
import { EMAIL_SUFFIXES, SCHOOL_FOUNDATIONS } from '../constants';
import { SchoolType } from 'src/domain/user/enums';
import {
  DuplicateAccountNameException,
  InvalidAdmissionYearException,
  InvalidEmailException,
  SchoolEmailMismatchException,
} from '../exceptions';
import { PasswordManager } from '../utils';

@Injectable()
export class StudentSignupService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordManager: PasswordManager,
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
      stat: {},
    });
    await this.userRepository.save(user);
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

  private async isDuplicateAccountName(accountName: string): Promise<boolean> {
    return await this.userRepository.exist({ where: { accountName } });
  }
}
