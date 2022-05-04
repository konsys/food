
import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { CrudService } from '../../../common/api';
import { clearToken, saveToken, saveRefreshToken } from '../../../modules/auth/model';
import { LoginDto, TTokens } from '../../../modules/login/types';
import { getMyProfile } from '../../../modules/user/store';
import { loginVkFetch } from './api';
import { TVkCode } from './types';

const URL = `users/auth/login`;
const crudService = new CrudService<LoginDto, LoginDto>(URL);

const AuthDomain = createDomain('AuthDomain');
export const clearTokenStore = AuthDomain.event();

export const loginFx = AuthDomain.effect<Partial<LoginDto>, LoginDto, Error>({
  handler: (mt) => crudService.create(mt),
});



// TODO add fail handler
const loginVkFx = AuthDomain.effect<TVkCode, TVkCode, Error>({
  handler: loginVkFetch,
});

// LoginGate
export const LoginGate = createGate<TVkCode>('LoginGate');

LoginGate.state.updates.watch((code) => {
  code.code && loginVkFx(code);
});



export const onSuccessLogin = (tokens: TTokens) => {
  clearToken();
  saveToken(tokens.accessToken);
  saveRefreshToken(tokens.refreshToken);
  getMyProfile();
};

