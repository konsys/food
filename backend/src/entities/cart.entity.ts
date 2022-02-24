import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    uuid: string;
  
    @Column()
    name: string;
  
    @Column({default: null})
    description: string;

    @Column()
    clientUuid: string;

//     @Column({
//         type: 'jsonb'
//       })
//     public properties: CarProperties;
}

