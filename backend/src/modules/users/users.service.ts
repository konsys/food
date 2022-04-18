import { BadRequestException, HttpException, Injectable, Logger } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TUserCreds, TVkAuthResponse, TVkGetUserResponce } from './types';
import { stringify } from 'query-string';
import { Tokens } from 'src/entities/tokens.entity';
import {
  getVkAccessTokenRequest,
  getVkGetUserRequest,
  jwtConstants,
  VkAppParams,
} from 'src/config';
import { axiosClient } from 'src/http/client';
import { TUuid } from 'src/common/types';

// rCd8cviaoYS9AV1CyA8h
@Injectable()
export class UsersService {
  private logger: Logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
    @InjectRepository(Tokens)
    private readonly tokens: Repository<Tokens>,
  ) { }

  async getAllUsers(filter?: FindManyOptions): Promise<User[]> {
    try {
      filter = { ...filter, skip: 1 };
      const users: any = await this.users.find(filter);
      return users;
    } catch (err) {
      this.logger.log(`Error: ${err}`);
    }
  }

  async getUser(userUuid: string): Promise<User | undefined> {
    const user: User = await this.users.findOne(userUuid);

    return new User(user);
  }


  async getUserByCredentials({
    email,
    password,
  }: Partial<TUserCreds>): Promise<User> {
    const user: User = await this.users.findOne({ email, password });
    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user: User = await this.users.findOne({ email });
    return user;
  }

  async updateUser(user: User): Promise<boolean> {
    user = new User(user);
    const update = await this.users.update({ uuid: user.uuid }, user);

    return update && update.affected > 0 ? true : false;
  }

  async saveUser(user: User): Promise<User> {
    user = new User(user);
    return await this.users.save(user);
  }

  async activateUser(
    registrationCode: string,
    email: string,
  ): Promise<boolean> {
    const user: User = await this.users.findOne({
      registrationCode,
      email,
    });

    if (!user) {
      throw new Error('No user found');
    }

    const res = await this.users.update(
      { registrationCode, email },
      { isActive: true },
    );

    return res && res.affected > 0 ? true : false;
  }
  async saveUsers(users: User[]): Promise<User[]> {
    const allUsers: User[] = await this.users.save(users);
    return allUsers;
  }

  async loginVK(code: string): Promise<User | null> {
    const { serviceKey } = VkAppParams;

    const link = `${VkAppParams.tokenURL}${stringify(
      getVkAccessTokenRequest(code),
    )}`;

    let tokenData = {} as TVkAuthResponse;
    try {
      tokenData = (await axiosClient.get<TVkAuthResponse>(link)).data;
    } catch (err) {
      if (err?.response?.data) {
        throw new BadRequestException(err?.response?.data);
      }
      throw new BadRequestException('Auth error');
    }

    const userGetLink = `https://api.vk.com/method/users.get?${stringify(
      getVkGetUserRequest({
        access_token: tokenData.access_token,
        fields: 'sex,bdate,photo_100,email',
        userUuid: tokenData.user_id,
      }),
    )}`;

    // TODO доделать получение данных по авторизируемому пользователю
    const user = (
      await axiosClient.get<TVkGetUserResponce>(userGetLink)
    ).data.response.pop();

    const isUser = await this.users.findOne({ vkId: user.userUuid });
    let savedUser = null;
    if (user) {
      if (!isUser) {
        savedUser = await this.users.save({
          avatar: user.photo_100,
          firstName: user.first_name,
          lastName: user.last_name,
          registrationType: 'vk',
          name: user.first_name,
          isActive: true,
          isBlocked: false,
          sex: user.sex,
          vip: false,
          vkId: user.userUuid,
          email: null,
        });
      } else if (isUser && isUser.uuid) {
        await this.users.update(
          { vkId: user.userUuid },
          {
            avatar: user.photo_100,
            firstName: user.first_name,
            lastName: user.last_name,
            registrationType: 'vk',
            name: user.first_name,
            isActive: true,
            isBlocked: false,
            sex: user.sex,
            email: null,
          },
        );
        savedUser = await this.users.findOne({ vkId: user.userUuid });
      }
    }

    return savedUser;
  }

  async getToken(token: string): Promise<Tokens> {
    const res: Tokens = await this.tokens.findOne({ token });
    return res;
  }

  async saveToken({
    token,
    userUuid,
    name,
  }: {
    token: string;
    userUuid: TUuid;
    name: string;
  }): Promise<Tokens> {
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + jwtConstants.refreshExpires);

    const tokenToSave: Tokens = {
      userUuid,
      name,
      expires,
      token,
    };

    let res = null;

    try {
      res = await this.tokens.save(tokenToSave);
    } catch (err) {
      res = await this.tokens.update(userUuid, { expires, token });
    }

    return res;
  }

  async deleteToken(token: string): Promise<boolean> {
    try {
      const res = await this.tokens.delete({ token });
      return res.affected > 0;
    } catch (err) {
      console.log('Error deleting refresh token', err);
      return false;
    }
  }

  async logout(token: string): Promise<boolean> {
    try {
      const res = await this.tokens.delete({ token });
      return res.affected > 0;
    } catch (err) {
      console.log('Error deleting refresh token', err);
      return false;
    }
  }

  async deleteUser(userUuid: number): Promise<boolean> {
    // TODO delete

    throw new HttpException('Not implemented', 500)
    // try {
    // 
    //   // const res = await this.users.delete({   userUuid, isTestUser: true });
    //   // return res.affected > 0;
    // } catch (err) {
    //   console.log('Error deleting user', err);
    //   return false;
    // }
  }
}
