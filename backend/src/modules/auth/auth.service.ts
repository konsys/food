import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ETokenType, IJwtPayload } from 'src/config';
import { Users } from 'src/entities/users.entity';
import { UsersService } from '../users/users.service';
import { TTokens } from './types';
import { getTokenExpire } from './utils';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(
    phone: string,
    password: string,
  ): Promise<Users | undefined> {
    const user = await this.usersService.getUserByCredentials({
      phone,
      password,
    });

    return user?.name ? user : undefined;
  }

  createPayload(username: string, uuid: string, tokenType: ETokenType): IJwtPayload {
    return {
      username,
      sub: uuid,
      tokenType
    };
  }

  async signJwt(payload: IJwtPayload, expiresIn?: string): Promise<string> {
    return expiresIn
      ? this.jwtService.sign(payload, { expiresIn })
      : this.jwtService.sign(payload);
  }

  async login(userCreds: Partial<Users>): Promise<TTokens> {

    const user = await this.usersService.getUser(userCreds.uuid);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const accessPayload: IJwtPayload = this.createPayload(user.email, user.uuid, ETokenType.ACCESS);
    const refreshPayload: IJwtPayload = this.createPayload(user.email, user.uuid, ETokenType.REFRESH);
    const accessToken = await this.signJwt(accessPayload);
    const refreshToken = await this.signJwt(refreshPayload, '60000s');

    await this.usersService.saveToken({
      token: refreshToken,
      userUuid: user.uuid,
      phone: user.phone,
      expires: getTokenExpire(),
      name: user.name
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

