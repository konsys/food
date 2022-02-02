import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Params } from '../../config/params';
import { getToken } from '../AuthService/model';

export const axiosClient: AxiosInstance = axios.create({
  baseURL: Params.BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  const token = `Bearer ${getToken()}`;
  config.headers && (config.headers.Authorization = token);

  return config;
}, onError);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;

      if (originalRequest.headers && !originalRequest.headers._retry) {
        let token = getToken();

        if (token) {
          // TODO refresh token
          // await refreshTokenFx(getRefreshToken() || "");
          originalRequest.headers._retry = 'true';
          token = getToken();

          axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
          return axiosClient.request(error.config);
        }
        return;
      }
    }

    throw error;
  }
);

async function onError(e: AxiosError) {
  console.error('Axios error', e);
}
