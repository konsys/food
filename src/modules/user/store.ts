import { createGate } from 'effector-react';
import { createDomain, sample } from 'effector';
import {
  fetchLogout,
  fetchMyProfile,
  fetchRefreshToken,
  fetchRegister,
  fetchUserEmail,
  fetchUserProfile,
} from './api';
import { IRegistrationResponce, IUserRegistration, UserDto } from './types';
import { clearToken, clearRefreshToken, saveToken, getRefreshToken } from '../auth/model';
import { Nullable } from '../../core/types';

const UserDomain = createDomain('UserDomain');

export const logout = UserDomain.event();

export const ProfileGate = createGate();
export const getProfileFx = UserDomain.effect<number, UserDto, Error>({
  handler: fetchUserProfile,
});

export const getUserByEmailFx = UserDomain.effect<string, UserDto, Error>({
  handler: fetchUserEmail,
});

export const clearProfile = UserDomain.event();

export const $profile = UserDomain.store<Nullable<UserDto>>(null)
  .on(getProfileFx.done, (_, { result }) => result || null)
  .reset(clearProfile);

export const getUserFx = UserDomain.effect<void, UserDto, Error>({
  handler: fetchMyProfile,
});

export const logoutFx = UserDomain.effect<string, boolean, Error>({
  handler: fetchLogout,
});

export const refreshTokenFx = UserDomain.effect<string, { accessToken: string }, Error>({
  handler: fetchRefreshToken,
});



refreshTokenFx.done.watch(({ result }) => {
  if (!result.accessToken) {
    clearToken();
    clearRefreshToken();
    logout();
  } else {
    saveToken(result.accessToken);
  }
});

export const getMyProfile = UserDomain.event();

// TODO test in getMyProfile call getUserFx
sample({
  clock: [ProfileGate.open, getMyProfile],
  source: ProfileGate.state,
  fn: () => undefined,
  target: getUserFx,
});


export const setUser = UserDomain.event<Nullable<UserDto>>();

export const registerFx = UserDomain.effect<IUserRegistration, IRegistrationResponce, Error>({
  handler: fetchRegister,
});

export const $registerStore = UserDomain.store<Nullable<IRegistrationResponce>>(null).on(
  registerFx.done,
  (_, { result }) => result
);

export const $user = UserDomain.store<Nullable<UserDto>>(null)
  .on(setUser, (_, data) => data)
  .on(getUserFx.done, (_, { result }) => result)
  .reset(logout);


sample({
  clock: logout,
  source: {
    gate: ProfileGate.state,
    user: $user.map((v) => v),
  },
  fn: () => {
    const token = getRefreshToken();
    clearRefreshToken();
    clearToken();
    return token || '';
  },
  target: logoutFx,
});
