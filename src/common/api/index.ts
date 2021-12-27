import { axiosClient } from '../../http/Clients';

export class CrudService<T> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }
  async create(params: T): Promise<T> {
    return (await axiosClient.post<T>(this.url, params)).data;
  }

  async getAll(): Promise<T[]> {
    return (await axiosClient.get<T[]>(this.url)).data;
  }

  async getOne(id: number): Promise<T> {
    return (await axiosClient.get<T>(this.url, { params: { id } })).data;
  }

  async updateOne(entity: T): Promise<T> {
    return (await axiosClient.put<T>(this.url, { params: entity })).data;
  }

  async deleteOne(id: number): Promise<number> {
    return (await axiosClient.delete(this.url, { params: id })).data;
  }
}
