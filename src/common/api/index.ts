import { AxiosResponse } from 'axios';
import { axiosClient } from '../../http/Clients';
import { TListRequest, TListResponce } from './types';

export class CrudService<T> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }
  async create(params: T): Promise<T> {
    console.log(1111111111111111, this.url);
    return (await axiosClient.post<T>(this.url, params)).data;
  }

  async getAll(params: TListRequest<T>): Promise<TListResponce<T>> {
    const { data } = await axiosClient.post<TListResponce<T>, AxiosResponse<TListResponce<T>>>(
      `${this.url}/filter`,
      params
    );
    return data;
  }

  async getOne(id: number): Promise<T> {
    return (await axiosClient.get<T>(`${this.url}/${id}`)).data;
  }

  async updateOne(entity: T): Promise<T> {
    return (await axiosClient.put<T>(this.url, entity)).data;
  }

  async deleteOne(id: number): Promise<{ affected?: number | null }> {
    return (await axiosClient.delete(`${this.url}/${id}`)).data;
  }
}
