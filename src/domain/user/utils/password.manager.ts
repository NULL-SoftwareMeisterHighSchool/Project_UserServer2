import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordManager {
  private readonly SALT_ROUNDS = 5;

  async encode(password: string): Promise<string> {
    return await bcrypt.hash(password, this.SALT_ROUNDS);
  }

  async compare(candiate: string, password: string): Promise<boolean> {
    return await bcrypt.compare(candiate, password);
  }
}
