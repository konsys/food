import { RestaurantMenu } from "./restaraunt-menu.entity";

export type TRestaurantMenuOrder = {
    restaurantMenu: RestaurantMenu;
    quantity: number;
  };