import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class FoodMenuEntity {
  @PrimaryGeneratedColumn()
    foodMenuId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt?: Date;
  
    @Exclude()
    @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date;
}
