import { TUuid } from "src/common/types";
import { EOrderStatus } from "src/entities/order.entity";

export type OrderDto = {
    id: number | null;
    orderDate: Date;
    time: string;
    uuid: TUuid;
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
