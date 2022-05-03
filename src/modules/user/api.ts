import { axiosClient } from '../../http/Clients';
import { IRegistrationResponce, IUserRegistration, UserDto } from './types';

const usersUrl = `/users`;
const initUsersUrl = `/users/init`;
export const initUsersFetch = async ({
  ids,
  gameId,
}: {
  ids: number[];
  gameId: string;
}): Promise<UserDto[]> =>
  (await axiosClient.get<UserDto[]>(initUsersUrl, { params: { ids, gameId } })).data;

export const usersFetch = async (ids: number[]): Promise<UserDto[]> =>
  (await axiosClient.get<UserDto[]>(usersUrl, { params: { ids } })).data;

const profileUrl = `/users/profile`;

export async function fetchMyProfile(): Promise<UserDto> {
  return (await axiosClient.get<UserDto>(profileUrl)).data;
}

export async function fetchUserProfile(id: number): Promise<UserDto> {
  const url = `${profileUrl}/${id}`;
  return (await axiosClient.get<UserDto>(url)).data;
}

export async function fetchUserEmail(email: string): Promise<UserDto> {
  return (await axiosClient.get<UserDto>('/users/creds', { params: { email } })).data;
}

const refreshUrl = `/users/auth/refresh`;

export async function fetchRefreshToken(accessToken: string): Promise<{ accessToken: string }> {
  return (await axiosClient.post<{ accessToken: string }>(refreshUrl, { accessToken })).data;
}

const logoutUrl = `/users/auth/logout`;

export async function fetchLogout(refreshToken: string): Promise<boolean> {
  return (await axiosClient.post<boolean>(logoutUrl, { refreshToken })).data;
}

export async function fetchRegister(user: IUserRegistration): Promise<IRegistrationResponce> {
  return (await axiosClient.post<IRegistrationResponce>('/users/register', user)).data;
}
