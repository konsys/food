import { AxiosResponse } from 'axios';
import { axiosClient } from '../../http/Clients';
import { TListRequest, TListResponce, TypeOrmDeleteResult } from './types';

export class CrudService<CreateEntity, ReturnEntity> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }
  async create(params: Partial<CreateEntity>): Promise<ReturnEntity> {
    return (await axiosClient.post<ReturnEntity>(this.url, params)).data;
  }

  async getAll(params: TListRequest<ReturnEntity>): Promise<TListResponce<ReturnEntity>> {
    const { data } = await axiosClient.post<
      TListResponce<ReturnEntity>,
      AxiosResponse<TListResponce<ReturnEntity>>
    >(`${this.url}/filter`, params);
    return data;
  }

  async getOne(id: number): Promise<ReturnEntity> {
    return (await axiosClient.get<ReturnEntity>(`${this.url}/${id}`)).data;
  }

  async updateOne(entity: ReturnEntity): Promise<ReturnEntity> {
    return (await axiosClient.put<ReturnEntity>(this.url, entity)).data;
  }

  async deleteOne(id: number): Promise<TypeOrmDeleteResult> {
    return (await axiosClient.delete(`${this.url}/${id}`)).data;
  }
}
