import { useStore } from 'effector-react';
import { $user } from '../../../modules/user/store';

export const REDIRECT_URI = 'http://127.0.0.1:3000/login';

export interface ILoginResponce {
  accessToken: string;
  refreshToken: string;
  loginError: string | null;
}

export const Login = () => {
  const user = useStore($user);
  return user ? 1 : 2;
};

export type TVkCode = {
  code: string;
};