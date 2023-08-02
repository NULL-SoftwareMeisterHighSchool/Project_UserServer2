export class LoginResponseDto {
  readonly access: {
    readonly expiresAt: number;
    readonly token: string;
  };
  readonly refresh: {
    readonly expiresAt: number;
    readonly token: string;
  };
}
