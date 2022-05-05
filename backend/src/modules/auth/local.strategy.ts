import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {

    // http://www.passportjs.org/docs/configure/
    super({ usernameField: 'phone', passReqToCallback: true });
  }

  async validate(_: Request, phone: string, password: string): Promise<any> {

    const user = await this.authService.validateUser(phone, password);

    console.log(11111111111, user, phone, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user ? user : null;
  }
}
