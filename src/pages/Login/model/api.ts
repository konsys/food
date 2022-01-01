import { axiosClient } from '../../../http/Clients';
import { ILoginForm, TVkCode } from './types';

const URL = `/login`;

export const loginFetch = async (params: ILoginForm): Promise<boolean> =>
  (await axiosClient.get<boolean>(URL, { params })).data;

export const loginVkFetch = async (params: TVkCode): Promise<TVkCode> => {
  const { code } = params;
  return (await axiosClient.post<TVkCode>('/users/login/vk', { code })).data;
};
