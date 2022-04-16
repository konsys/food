import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // http://www.passportjs.org/docs/configure/
    super({ usernameField: 'email', passReqToCallback: true });
  }

  async validate(_: Request, email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new Error('No user');
    }
    return user ? user : null;
  }
}
