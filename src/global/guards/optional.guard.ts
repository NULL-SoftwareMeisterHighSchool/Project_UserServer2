import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserInfo } from '../types/user-info.type';

@Injectable()
export class OptionalGuard implements CanActivate {
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    let payload: UserInfo;
    try {
      payload = this.jwtService.verify<UserInfo>(this.getAccessToken(request));
      delete payload['iat'];
      delete payload['exp'];

      request['user'] = payload;
    } catch {}

    return true;
  }

  private getAccessToken(request: Request): string {
    const authorization = request.headers['authorization'];
    if (authorization === null || !authorization.startsWith('Bearer ')) {
      return '';
    }

    const [, accessToken] = authorization.split(' ');
    return accessToken;
  }
}
