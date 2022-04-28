import { LocalStorageParams } from './types';

export const getRefreshToken = (): string | null => localStorage.getItem(LocalStorageParams.REFRESH_TOKEN);

export const saveRefreshToken = (token: string): void | null => {
  localStorage.setItem(LocalStorageParams.REFRESH_TOKEN, token);
};

export const clearRefreshToken = () => {
  localStorage.removeItem(LocalStorageParams.REFRESH_TOKEN);
};

export const getToken = (): string | null => localStorage.getItem(LocalStorageParams.TOKEN);

export const saveToken = (token: string): void | null => {
  localStorage.setItem(LocalStorageParams.TOKEN, token);
};

export const clearToken = () => {
  localStorage.removeItem(LocalStorageParams.TOKEN);
};
