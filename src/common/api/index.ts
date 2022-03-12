import { AxiosResponse } from 'axios';
import { axiosClient } from '../../http/Clients';
import { TUuid } from '../types';
import { TListRequest, TListResponce, TypeOrmDeleteResult } from './types';

export class CrudService<CreateEntity, FullEntity> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async create(item: Partial<CreateEntity>): Promise<FullEntity> {
    return (await axiosClient.post<FullEntity>(this.url, item)).data;
  }

  async getAll(params: TListRequest<FullEntity>): Promise<TListResponce<FullEntity>> {
    const { data } = await axiosClient.post<
      TListResponce<FullEntity>,
      AxiosResponse<TListResponce<FullEntity>>
    >(`${this.url}/filter`, params);
    return data;
  }

  async getOne(uuid: TUuid): Promise<FullEntity> {
    return (await axiosClient.get<FullEntity>(`${this.url}/${uuid}`)).data;
  }

  async updateOne(entity: FullEntity): Promise<FullEntity> {
    return (await axiosClient.put<FullEntity>(this.url, entity)).data;
  }

  async deleteOne(uuid: TUuid): Promise<TypeOrmDeleteResult> {
    return (await axiosClient.delete(`${this.url}/${uuid}`)).data;
  }
}
