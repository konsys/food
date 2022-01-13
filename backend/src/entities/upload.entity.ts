import { AbstractDictionary } from "src/modules/abstract/abstractDictionary";
import { Column } from "typeorm";

export class UploadEntity extends AbstractDictionary {

    @Column()
    original: string;

    @Column({ default: null })
    bigImg: string;

    @Column({ default: null })
    averageImg: string;

    @Column({ default: null })
    smallImg: string;
}
