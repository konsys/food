import { AxiosResponse } from 'axios';
import { axiosClient } from '../../http/Clients';
import { TListRequest, TListResponce, TypeOrmDeleteResult } from './types';

export class CrudService<CreateEntity, FullEntity> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async create(params: Partial<CreateEntity>): Promise<FullEntity> {
    return (await axiosClient.post<FullEntity>(this.url, params)).data;
  }

  async getAll(params: TListRequest<FullEntity>): Promise<TListResponce<FullEntity>> {
    const { data } = await axiosClient.post<
      TListResponce<FullEntity>,
      AxiosResponse<TListResponce<FullEntity>>
    >(`${this.url}/filter`, params);
    return data;
  }

  async getOne(id: number): Promise<FullEntity> {
    return (await axiosClient.get<FullEntity>(`${this.url}/${id}`)).data;
  }

  async updateOne(entity: FullEntity): Promise<FullEntity> {
    return (await axiosClient.put<FullEntity>(this.url, entity)).data;
  }

  async deleteOne(id: number): Promise<TypeOrmDeleteResult> {
    return (await axiosClient.delete(`${this.url}/${id}`)).data;
  }
}
