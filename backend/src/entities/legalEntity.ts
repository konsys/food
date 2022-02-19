import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity } from "typeorm";
@Entity()
export class Legal extends AbstractDictionary {
    @Column()
    address: string;

    @Column()
    inn: string;

    @Column({default: null})
    kpp?: string;

    @Column({default: null})
    ogrn?: string;

}

