import { TId, TUuid } from "../../common/types";
import { TRestaurantMenuOrder } from "../cart/types";

export enum EOrderStatus { CREATED = 'CREATED', PAID = 'PAID', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', CLOSED = 'CLOSED' }


export type TOrder = {
    id: TId;
    orderDate: Date;
    time: string;
    uuid: TUuid;
    userUuid: TUuid;
    promoCodeUuid: TUuid;
    percentDiscount: number;
    status: EOrderStatus;
    price: number;
    places: number;
    phone: string;
    description: string;
    confirmationCode: string;
    phoneConfirmed: boolean;
    codeSent: boolean;
    isPhoneValid: boolean;
    isCodeValid: boolean;
    isTimerRunning: boolean
}

export type OrderDto = {
    id: number;
    uuid: string;
    userUuid: TUuid;
    restaurantUuid: TUuid;
    promoCodeUuid: string;
    status: EOrderStatus
    date: Date
    percentDiscount: number
    time: string
    phone: string
    description?: string
    priceWithoutDiscount: number;
    priceWithDiscount: number;
    places: number;
    order: TRestaurantMenuOrder[];
}
