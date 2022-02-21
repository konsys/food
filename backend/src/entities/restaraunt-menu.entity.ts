import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import {  Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import { Images } from './images.entity';
import { Restaurant } from "./restaurant.entity";

@Entity()
export class RestaurantMenu extends AbstractDictionary {
    @Column({ type: "int", nullable: true, default: null })
    imageId: number;

    @ManyToOne(() => Images, {eager: true})
    @JoinColumn({ name: "imageId" })
    image: Images;
    
    @Column()
    price: number;

    @Column()
    weight: number;

    @Column({default: null})
    amount?: number;

    @Column({ type: "int", nullable: true, default: null })
    restaurantId: number;

    // @ManyToOne(() => Restaurant, {eager: true})
    @ManyToOne(() => Restaurant, restaurant => restaurant.restaurantMenu, {eager: true})
    @JoinColumn({ name: "restaurantId" })
    restaurant: Restaurant;

    // @ManyToOne(type => Author, author => author.photos)
    // author: Author;

}
