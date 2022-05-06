import { axiosClient } from '../../../http/Clients';
import { TVkCode } from './types';



export const loginVkFetch = async (params: TVkCode): Promise<TVkCode> => {
  const { code } = params;
  return (await axiosClient.post<TVkCode>('/users/login/vk', { code })).data;
};
