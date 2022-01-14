import { AbstractDictionary } from "src/modules/abstract/abstractDictionary";
import { Column, Entity } from "typeorm";
@Entity()
export class ImageEntity extends AbstractDictionary {

    @Column()
    original: string;

    @Column({ default: null })
    bigImg: string;

    @Column({ default: null })
    averageImg: string;

    @Column({ default: null })
    smallImg: string;

    @Column({ default: null })
    encoding: string;

    @Column({ default: null })
    fieldname: string;

    @Column({ default: null })
    filename: string;

    @Column({ default: null })
    mimetype: string;

    @Column({ default: null })
    originalname: string;

    @Column({ default: null })
    path: string;

    @Column({ default: null })
    size: number;
}

