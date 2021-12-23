import { Exclude } from 'class-transformer';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
@Entity()
export class FoodMenuEntity {
    @Column()
    @PrimaryColumn()
    @Index({ unique: true })
    userId: number;

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
