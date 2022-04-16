import { notification } from 'antd';
import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { CrudService } from '../../../common/api';
import { clearToken, saveRefreshToken, saveToken } from '../../../http/AuthService/model';
import { LoginDto } from '../../../modules/login/types';
import { getMyProfile } from '../../User/model/store';
import { loginVkFetch } from './api';
import { ILoginResponce, TTokens, TVkCode } from './types';

const URL = `users/auth/login`;
const crudService = new CrudService<LoginDto, LoginDto>(URL);

const AuthDomain = createDomain('AuthDomain');
export const clearTokenStore = AuthDomain.event();

export const loginFx = AuthDomain.effect<Partial<LoginDto>, LoginDto, Error>({
  handler: (mt) => crudService.create(mt),
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
export const $loginStore = AuthDomain.store<ILoginResponce | null>(null)
  .on(loginFx.done, (_, { result }: { result: any }) => {
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

