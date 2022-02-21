import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Images } from './images.entity';
import { Restaurant } from "./restaurant.entity";

@Entity()
export class RestaurantMenu extends AbstractDictionary {
    @Column({ type: "int", nullable: true, default: null })
    imageId: number;

    @ManyToOne(() => Images, { eager: true })
    @JoinColumn({ name: "imageId" })
    image: Images;

    @Column()
    price: number;

    @Column()
    weight: number;

    @Column({ default: null })
    amount?: number;


    @ManyToOne(() => Restaurant, restaurant => restaurant.restaurantMenu)
    @JoinColumn({ name: "restaurantId" })
    restaurant: Restaurant;


}
