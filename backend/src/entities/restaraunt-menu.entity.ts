import { FoodCategory } from 'src/entities/food-category.entity';
import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Images } from './images.entity';
import { Restaurant } from "./restaurant.entity";

@Entity()
export class RestaurantMenu extends AbstractDictionary {
    @Column({ type: "int", nullable: true, default: null })
    imageUuid: number;

    @ManyToOne(() => Images, { eager: true })
    @JoinColumn({ name: "imageUuid" })
    image: Images;

    @Column({ type: "int", nullable: true, default: null })
    foodCategoryUuid: number;

    @ManyToOne(() => FoodCategory, { eager: true })
    @JoinColumn({ name: "foodCategoryUuid" })
    foodCategory: FoodCategory;

    @Column()
    price: number;

    @Column()
    weight: number;

    @Column({ default: null })
    amount?: number;


    @Column({ type: "int", nullable: true, default: null })
    restaurantUuid: number;


    @ManyToOne(() => Restaurant, restaurant => restaurant.restaurantMenu)
    @JoinColumn({ name: "restaurantUuid" })
    restaurant: Restaurant;


}
