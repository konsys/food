import { RestaurantMenu } from 'src/entities/restaraunt-menu.entity';
import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';
import { Images } from './images.entity';
import { Legal } from "./legal.entity";

@Entity()
export class Restaurant extends AbstractDictionary {


    @Column({ type: "int", nullable: true, default: null })
    logoId: number;

    @ManyToOne(() => Images, {eager: true})
    @JoinColumn({ name: "logoId" })
    logo?: Images;

    @Column({ type: "int", nullable: true, default: null })
    imageId: number;

    @ManyToOne(() => Images, {eager: true})
    @JoinColumn({ name: "imageId" })
    image: Images;


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


    @OneToMany(() => RestaurantMenu, restaurantMenu => restaurantMenu.restaurant)
    restaurantMenu: RestaurantMenu[];
}


 type RatingDto = 1 | 2 | 3 | 4 | 5;


 enum EFoodType {
    EUROPIAN = 'Европейская кухня',
    GEORGIAN = 'Европейская кухня',
    CHINEESE = 'Китайская кухня',
    JAPAN = 'Японская кухня',
    INDIAN = 'Индийская кухня',
  }
 

   enum ERatingColor {
    WARNING_COLOR ='WARNING_COLOR',
    SUCCESS_COLOR='SUCCESS_COLOR',
  }

