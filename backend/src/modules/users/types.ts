import { Request as ExpressRequest } from 'express';
import { TUuid } from 'src/common/types';

export interface IRequestWithUser extends ExpressRequest {
  user: {
    userUuid: TUuid;
    name: string;
  };
}

export type TUserCreds = {
  email?: string;
  name?: string;
  password?: string;
  userUuid?: TUuid;
};

export type TVkUserResponce = {
  userUuid: TUuid;
  email?: string;
  sex: number;
  bdate: string;
  photo_100: string;
  last_name: string;
  first_name: string;
  can_access_closed: boolean;
  is_closed: boolean;
};

export type TVkToken = {
  access_token: string;
  expires_in: number;
  user_id: number;
  email?: string;
};

export type TVkLoginRequest = {
  code: string;
};

export type TTokens = { accessToken: string; refreshToken: string };

export type TVkAuthResponse = {
  access_token: string;
  expires_in: number;
  user_id: number;
  email: string | null;
};

export enum EVkSex {
  'нет',
  'жен',
  'муж',
}

export type TVkGetUser = {
  first_name: string;
  userUuid: TUuid;
  last_name: string;
  can_access_closed: boolean;
  is_closed: boolean;
  sex: EVkSex;
  photo_100: string;
  bdate: string;
  email?: string | null;
};

export type TVkGetUserResponce = {
  response: TVkGetUser[];
};

export type TVkTokenError = {
  error: string;
  error_description: string;
};
