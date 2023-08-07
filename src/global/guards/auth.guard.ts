import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserInfo } from '../types/user-info.type';
import { UnauthorizedException } from '../exceptions';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    let payload: UserInfo;
    try {
      payload = this.jwtService.verify<UserInfo>(this.getAccessToken(request));
    } catch (e) {
      throw new UnauthorizedException();
    }

    delete payload['iat'];
    delete payload['exp'];

    request['user'] = payload;
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
