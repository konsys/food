import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from './users.service';
import { LocalAuthGuard } from 'src/modules/auth/local-auth.guard';
import { AuthService } from 'src/modules/auth/auth.service';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { IRequestWithUser, TTokens, TVkLoginRequest } from './types';
import { IJwtPayload, jwtConstants } from 'src/config';
import { TUuid } from 'src/common/types';

@Controller('users')
export class UsersController {
  constructor(
    private readonly service: UsersService,
    private readonly authService: AuthService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(
    @Request() req: IRequestWithUser,
  ): Promise<{ accessToken: string }> {
    return this.authService.login({
      name: req.user.name,
      userUuid: req.user.userUuid,
    });
  }

  @Post('auth/registration')
  async register(
    @Body() user: User
  ): Promise<User> {
    console.log(11111111111, user);
    return this.service.saveUser(user)
  }


  @Post('auth/logout')
  logout(
    @Body() { refreshToken }: { refreshToken: string },
  ): Promise<boolean> {

    return this.service.logout(refreshToken);
  }

  @Post('auth/refresh')
  async refresh(
    @Body() { accessToken }: { accessToken: string },
  ): Promise<{ accessToken: string | null }> {
    const token = await this.service.getToken(accessToken);
    const dt = new Date().getTime();
    if (token && new Date(token.expires).getTime() >= dt) {
      const payload: IJwtPayload = this.authService.createPayload(
        token.name,
        token.userUuid,
      );
      const accessToken = await this.authService.signJwt(payload);

      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + jwtConstants.refreshExpires);
      token.expires = expires;
      await this.service.saveToken({
        token: token.token,
        userUuid: token.userUuid,
        name: token.name,
      });

      return { accessToken };
    }
    if (token) {
      await this.service.deleteToken(accessToken);
    }

    return { accessToken: '' };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req: IRequestWithUser): Promise<User> {
    const profile = new User(
      await this.service.getUser(req.user.userUuid),
    );
    return profile;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('profile/:uuid')
  async getProfileById(@Param('uuid') userUuid: TUuid): Promise<User> {
    return new User(await this.service.getUser(userUuid));
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('creds')
  async getProfileByEmail(@Query('email') email: string): Promise<User> {
    const res = new User(await this.service.getUserByEmail(email));
    return res;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register/code')
  async saveCode(
    @Body()
    { registrationCode, email }: { registrationCode: string; email: string },
  ): Promise<boolean> {
    const emailIsRegistered = await this.service.getUserByEmail(email);

    if (emailIsRegistered && !!emailIsRegistered.isActive) {
      throw new Error('Not registered');
    }

    const res = await this.service.activateUser(registrationCode, email);

    if (!res) {
      throw new Error('Activating error');
    }
    return res;
  }

  @Post('login/vk')
  async loginVk(
    @Body()
    { code }: TVkLoginRequest,
  ): Promise<TTokens> {
    const user = new User(await this.service.loginVK(code));
    return this.authService.login(user);
  }

  @Delete('/:userUuid')
  async deleteUser(
    @Param()
    { userUuid }: { userUuid: number },
  ): Promise<any> {
    const res = await this.service.deleteUser(userUuid);
    return res;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('email/:email')
  async getUserByEmail(
    @Param() email: string,
  ): Promise<User | undefined> {
    return this.service.getUserByEmail(email);
  }

  @Post()
  async saveUsers(@Param() users: User[]): Promise<User[]> {
    return this.service.saveUsers(users);
  }
}
