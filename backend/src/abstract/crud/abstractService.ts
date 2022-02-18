import { Injectable } from '@nestjs/common';
import { TPromiseFn, TUuid } from 'src/common/types';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { DeleteResult, FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class AbstractService<E, C, U> implements IAbstractService<E, C, U>{
    private repository: Repository<E> = null;

    constructor(repository: Repository<E>) {
        this.repository = repository;
    }
 
    create(createDto: C) {
        return this.repository.save(createDto);
    }

    async findAll({ limit, page, filter }: TListRequest<E>): Promise<TListResponce<E>> {
     
        page = +(page >= 0 ? page : 0);
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
        return this.repository.findOne(uuid);
    }

    update(updateDto: U) {
        return this.repository.save(updateDto);
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}

export interface IAbstractService<R, C, U> {
    create: TPromiseFn<C, R>;
    findAll: TPromiseFn<TListRequest<R>, TListResponce<R>>
    findOne: TPromiseFn<TUuid, R>
    update: TPromiseFn<U, R>
    remove: TPromiseFn<number, DeleteResult>
}