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
import { IRegistrationResponce, IUser, IUserRegistration } from './types';
import { clearToken, clearRefreshToken, saveToken, getRefreshToken } from '../auth/model';

const UserDomain = createDomain('UserDomain');

export const logout = UserDomain.event();

export const ProfileGate = createGate();
export const getProfileFx = UserDomain.effect<number, IUser, Error>({
  handler: fetchUserProfile,
});

export const getUserByEmailFx = UserDomain.effect<string, IUser, Error>({
  handler: fetchUserEmail,
});

export const clearProfile = UserDomain.event();

export const $$profile = UserDomain.store<IUser | null>(null)
  .on(getProfileFx.done, (_, { result }) => result || null)
  .reset(clearProfile);

export const getUserFx = UserDomain.effect<void, IUser, Error>({
  handler: fetchMyProfile,
});

export const logoutFx = UserDomain.effect<string, boolean, Error>({
  handler: fetchLogout,
});

export const refreshTokenFx = UserDomain.effect<string, { accessToken: string }, Error>({
  handler: fetchRefreshToken,
});

// sample({
//   clock: refreshTokenFx.done,
//   source: refreshTokenFx.done,
//   fn: (result) => {
//     saveToken(result.accessToken);
//   },
//   target: logoutFx,
// });

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

ProfileGate.state.watch((v) => console.log('Profile gate update', v));
ProfileGate.close.watch(() => console.log('Profile gate closes'));

export const setUser = UserDomain.event<IUser | null>();

export const registerFx = UserDomain.effect<IUserRegistration, IRegistrationResponce, Error>({
  handler: fetchRegister,
}); 1

export const $registerStore = UserDomain.store<IRegistrationResponce | null>(null).on(
  registerFx.done,
  (_, { result }) => result
);

export const $user = UserDomain.store<IUser | null>(null)
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
