import { client } from '../../../http/Clients';
import { MenuTime } from './types';
const URL = `/menu-time`;

export const createTimeMenu = async (params: MenuTime): Promise<MenuTime> =>
  (await client.post<MenuTime>(URL, params)).data;

export const getAllTimeMenu = async (): Promise<MenuTime[]> =>
  (await client.get<MenuTime[]>(URL)).data;
