import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TUuid } from 'src/common/types';
import { IJwtPayload } from 'src/config';
import { UsersEntity } from 'src/entities/users.entity';
import { TTokens, TUserCreds } from '../users/types';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UsersEntity | undefined> {
    const user = await this.usersService.getUserByCredentials({
      email,
      password,
    });

    return user && user.name ? user : undefined;
  }

  createPayload(username: string, userUuid: TUuid): IJwtPayload {
    return {
      username,
      sub: userUuid,
    };
  }

  async signJwt(payload: IJwtPayload, expiresIn?: string): Promise<string> {
    return expiresIn
      ? this.jwtService.sign(payload, { expiresIn })
      : this.jwtService.sign(payload);
  }

  async login(user: TUserCreds): Promise<TTokens> {
    const payload: IJwtPayload = this.createPayload(user.name, user.userUuid);

    const accessToken = await this.signJwt(payload);
    const refreshToken = await this.signJwt(payload, '60000s');

    await this.usersService.saveToken({
      token: refreshToken,
      userUuid: user.userUuid,
      name: user.name,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
