import { TUuid } from "../types";

export type CartOrder = {
    user: TUuid;
    orderUuid: TUuid;
    restaurantMenuUuid: TUuid;
    quantity: number
}