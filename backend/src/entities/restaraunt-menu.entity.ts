import { FoodCategory } from 'src/entities/food-category.entity';
import { AbstractDictionary } from "src/abstract/crud/abstractDictionary";
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Images } from './images.entity';
import { Restaurant } from "./restaurant.entity";

@Entity()
export class RestaurantMenu extends AbstractDictionary {
    @Column({ nullable: true, default: null })
    imageUuid: string;

    @ManyToOne(() => Images, { eager: true })
    @JoinColumn({ name: "imageUuid" })
    image: Images;

    @Column({ nullable: true, default: null })
    foodCategoryUuid: string;

    @ManyToOne(() => FoodCategory, { eager: true })
    @JoinColumn({ name: "foodCategoryUuid" })
    foodCategory: FoodCategory;

    @Column()
    price: number;

    @Column()
    weight: number;

    @Column({ default: null })
    amount?: number;


    @Column({ nullable: true, default: null })
    restaurantUuid: string;


    @ManyToOne(() => Restaurant, restaurant => restaurant.restaurantMenu)
    @JoinColumn({ name: "restaurantUuid" })
    restaurant: Restaurant;


}
