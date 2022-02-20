import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import { Images } from './images.entity';
import { Legal } from "./legalEntity";

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



  // priceRating: factory.each(() => 1),
  // foodType: factory.each(() => EFoodType.EUROPIAN),
  // description: factory.each(() => faker.commerce.productDescription()),
  // closeTime: factory.each(() => faker.datatype.datetime()),
  // image: factory.each(() => imageFactory.build()),
  // logo: factory.each(() => imageFactory.build()),
  // menuItems: factory.each(() => []),
  // openTime: factory.each(() => faker.datatype.datetime()),
  // createdAt: factory.each(() => faker.datatype.datetime()),
  // updatedAt: factory.each(() => faker.datatype.datetime()),
  // imageId: factory.each(() => 1),
  // legalId: factory.each(() => 1),
  // logoId: factory.each(() => 1),