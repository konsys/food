import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import { Images } from './images.entity';

@Entity()
export class Restaraunt extends AbstractDictionary {
    @Column()
    uuid: string;

    @Column()
    deliveryType: EDeliveryType;

    @Column()
    price: number;
    
    @Column({ type: "int", nullable: true })
    imgId: number;
  
    @ManyToOne(() => Images, {eager: true})
    @JoinColumn({ name: "imgId" })
    image: Images;

    @Column()
    logoUrl: string;

    @Column()
    rating: number;

    @Column()
    ratingColor: ERatingColor;

    @Column()
    foodType: EFoodType;
}

export enum EFoodType {
    EUROPIAN = 'Европейская кухня',
    GEORGIAN = 'Европейская кухня',
    CHINEESE = 'Китайская кухня',
    JAPAN = 'Японская кухня',
    INDIAN = 'Индийская кухня',
  }
  
  export enum EDeliveryType {
    LONG_DISTANCE='LONG_DISTANCE',
    STANDARD='STANDARD',
    HIGH_DEMAND='HIGH_DEMAND',
  }
  

  export enum ERatingColor {
    WARNING_COLOR ='WARNING_COLOR',
    SUCCESS_COLOR='SUCCESS_COLOR',
  }