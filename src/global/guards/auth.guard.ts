import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const payload = this.jwtService.verify(this.getAccessToken(request));
    if (payload == null) throw new UnauthorizedException();

    request['user'] = payload;
    return true;
  }

  private getAccessToken(request: Request): string {
    const authorization = request.headers.get('Authorization');
    if (authorization === null || !authorization.startsWith('Bearer ')) {
      return '';
    }

    const [, accessToken] = authorization.split(' ');
    return accessToken;
  }
}
