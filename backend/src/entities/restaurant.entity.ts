import { RestaurantMenu } from 'src/entities/restaraunt-menu.entity';
import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Images } from './images.entity';
import { Legal } from "./legal.entity";

@Entity()
export class Restaurant extends AbstractDictionary {

  @Column({ nullable: true, default: null })
  logoUuid: string;

  @ManyToOne(() => Images, { eager: true })
  @JoinColumn({ name: "logoUuid" })
  logo?: Images;

  @Column({ nullable: true, default: null })
  imageUuid: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @ManyToOne(() => Images, { eager: true })
  @JoinColumn({ name: "imageUuid" })
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

  @Column({ nullable: true, default: null })
  legalUuid: string;

  @ManyToOne(() => Legal, { eager: true })
  @JoinColumn({ name: "legalUuid" })
  legal: Legal;


  @OneToMany(() => RestaurantMenu, restaurantMenu => restaurantMenu.restaurant, { eager: true })
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
  WARNING_COLOR = 'WARNING_COLOR',
  SUCCESS_COLOR = 'SUCCESS_COLOR',
}

