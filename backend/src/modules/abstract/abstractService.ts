import { Injectable } from '@nestjs/common';
import { TListRequest, TListResponce } from 'src/common/types/paginationTypes';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class AbstractService<R, T, U> {
    private repository: Repository<R> = null;

    constructor(repository: Repository<R>) {
        this.repository = repository;
    }

    create(createMenuDto: T) {
        return this.repository.save(createMenuDto);
    }

    async findAll({ limit, page, filter }: TListRequest<R>): Promise<TListResponce<R>> {
     
        page = +(page >= 0 ? page : 0);
        const take = limit = +limit;
        const skip = take * (page - 1);
        const whereFilter = filter ? { where: JSON.parse(filter) } : null;
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

    findOne(id: number) {
        return this.repository.findOne(id);
    }

    update(updateMenuDto: U) {
        return this.repository.save(updateMenuDto);
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}
