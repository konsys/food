import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import { Images } from './images.entity';
import { Legal } from "./legalEntity";

@Entity()
export class Restaurant extends AbstractDictionary {
    @Column()
    deliveryType: EDeliveryType;

    @Column()
    price: number;
    
    @Column({ type: "int", nullable: true, default: null })
    logoId: number;

    @ManyToOne(() => Images, {eager: true})
    @JoinColumn({ name: "logoId" })
    logo: Images;

    @Column({ type: "int", nullable: true, default: null })
    imgId: number;

    @ManyToOne(() => Images, {eager: true})
    @JoinColumn({ name: "imgId" })
    image: Images;

    @Column()
    logoUrl: string;

    @Column()
    ratingColor: ERatingColor;

    @Column()
    foodType: EFoodType;

    @Column()
    openTime: Date;

    @Column()
    closeTime: Date;

    @Column()
    priceRating: RatingDto;

    @Column()
    rating: RatingDto;

    @Column({ type: "int", nullable: true, default: null })
    legalId: number;

    @ManyToOne(() => Legal, {eager: true})
    @JoinColumn({ name: "legalId" })
    legal: Legal;

}


//   deliveryPrice: number;
//   deliveryRange: DeliveryRangeDto;
//   maxDeliveryMinutes: number;
//   minDeliveryMinutes: number;
//   menuItems: TLinkWithText[];
// } & DictionaryDto;

 type RatingDto = 1 | 2 | 3 | 4 | 5;


 enum EFoodType {
    EUROPIAN = 'Европейская кухня',
    GEORGIAN = 'Европейская кухня',
    CHINEESE = 'Китайская кухня',
    JAPAN = 'Японская кухня',
    INDIAN = 'Индийская кухня',
  }
  
   enum EDeliveryType {
    LONG_DISTANCE='LONG_DISTANCE',
    STANDARD='STANDARD',
    HIGH_DEMAND='HIGH_DEMAND',
  }
  

   enum ERatingColor {
    WARNING_COLOR ='WARNING_COLOR',
    SUCCESS_COLOR='SUCCESS_COLOR',
  }