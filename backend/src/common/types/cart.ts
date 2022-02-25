import { TUuid } from "../types";

export type CartOrder = {
    restaurantMenuUuid: TUuid;
    quantity: number;
}