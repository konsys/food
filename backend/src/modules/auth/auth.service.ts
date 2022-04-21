import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TUuid } from 'src/common/types';
import { IJwtPayload } from 'src/config';
import { User } from 'src/entities/user.entity';
import { TTokens, TUserCreds } from '../users/types';
import { UsersService } from '../users/users.service';
import { getTokenExpire } from './utils';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.usersService.getUserByCredentials({
      email,
      password,
    });

    return user?.name ? user : undefined;
  }

  createPayload(username: string, uuid: string): IJwtPayload {
    return {
      username,
      sub: uuid,
    };
  }

  async signJwt(payload: IJwtPayload, expiresIn?: string): Promise<string> {
    return expiresIn
      ? this.jwtService.sign(payload, { expiresIn })
      : this.jwtService.sign(payload);
  }

  async login(userCreds: Partial<User>): Promise<TTokens> {

    const user = await this.usersService.getUser(userCreds.uuid);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const payload: IJwtPayload = this.createPayload(user.email, user.uuid);
    const accessToken = await this.signJwt(payload);
    const refreshToken = await this.signJwt(payload, '60000s');

    await this.usersService.saveToken({
      token: refreshToken,
      userUuid: user.uuid,
      email: user.email,
      expires: getTokenExpire(),
      name: user.name
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

