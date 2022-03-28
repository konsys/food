import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export const axiosClient: AxiosInstance = axios.create({
  baseURL: '/',
});

axiosClient.interceptors.request.use((config) => {
  return config;
}, onError);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    throw error;
  },
);

async function onError(e: AxiosError) {
  console.error('Axios error', e);
}
