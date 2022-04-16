import { notification } from 'antd';
import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';
import { clearToken, saveRefreshToken, saveToken } from '../../../http/AuthService/model';
import { LoginDto } from '../../../modules/login/types';
import { getMyProfile } from '../../User/model/store';
import { loginFetch, loginVkFetch } from './api';
import { ILoginResponce, TTokens, TVkCode } from './types';

const AuthDomain = createDomain('AuthDomain');
export const clearTokenStore = AuthDomain.event();

// Login
export const login = AuthDomain.event<LoginDto>();
const loginFx = AuthDomain.effect<LoginDto, boolean, Error>({
  handler: loginFetch,
});

sample({
  clock: login,
  fn: (lg: LoginDto) => lg,
  target: loginFx,
});

// TODO add fail handler
// loginFx.fail.watch((error: string) => setError(error));

const loginVkFx = AuthDomain.effect<TVkCode, TVkCode, Error>({
  handler: loginVkFetch,
});

// LoginGate
export const LoginGate = createGate<TVkCode>('LoginGate');

LoginGate.state.updates.watch((code) => {
  code.code && loginVkFx(code);
});

// Store
export const $$login = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginFx.done, (_, { result }: { result: any }) => {
    auth({ ...result });
    return result;
  })
  .on(loginVkFx.done, (_, { result }: { result: any }) => {
    auth({ ...result });
    return result;
  })
  .on(loginFx.fail, () => {
    clearToken();
    notification.error({ message: 'Ошибка авторизации' });
  })
  .reset(clearTokenStore);

const auth = (tokens: TTokens) => {
  clearToken();
  saveToken(tokens.accessToken);
  saveRefreshToken(tokens.refreshToken);
  getMyProfile();
};

$$login.updates.watch((v) => console.log('LoginStoreWatch', v));
