import { Injectable } from '@nestjs/common';
import { TPromiseFn, TUuid } from 'src/common/types';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class AbstractService<E extends { uuid: TUuid }> implements IAbstractService<E>{
    private repository: Repository<E> = null;

    constructor(repository: Repository<E>) {
        this.repository = repository;
    }

    async create(entity: DeepPartial<E>) {
        const res = await this.repository.save(entity);
        return this.repository.findOne({ where: { uuid: res.uuid } });
    }

    async findAll({ limit, page, filter }: TListRequest<E>): Promise<TListResponce<E>> {

        page = +(page && page >= 1 ? page : 1);
        const take = limit = +limit;
        const skip = take * (page - 1);
        const whereFilter = filter ? { where: filter } : null;
        const totalRecords = await this.repository.count(whereFilter);

        let allFilters: FindManyOptions = {
            take: limit,
            skip,
            order: { id: "ASC" },
        }
        if (whereFilter) {
            allFilters = { ...allFilters, ...whereFilter };
        }

        const items = await this.repository.find(allFilters);
        return {
            items,
            limit,
            page,
            filter,
            totalRecords
        }
    }

    findOne(uuid: TUuid) {
        return this.repository.findOne({ where: { uuid } });
    }

    async findOneByFilter(filter: DeepPartial<E>) {
        return this.repository.findOne({ where: filter });
    }

    async update(entity: DeepPartial<E>) {
        const res = await this.repository.save(entity);
        return this.repository.findOne({ where: { uuid: res.uuid } });
    }

    async removeItem(uuid: TUuid) {
        const phones = await this.repository.find({ where: { uuid } });
        return this.repository.remove(phones);
    }
}

export interface IAbstractService<E> {
    create: TPromiseFn<DeepPartial<E>, E>;
    findAll: TPromiseFn<TListRequest<E>, TListResponce<E>>
    findOne: TPromiseFn<TUuid, E>
    findOneByFilter: TPromiseFn<DeepPartial<E>, E>
    update: TPromiseFn<DeepPartial<E>, E>
    removeItem: TPromiseFn<TUuid, E[]>
} 