import { TId, TUuid } from "../../common/types";

export enum EOrderStatus { CREATED = 'CREATED', PAID = 'PAID', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', CLOSED = 'CLOSED' }


export type OrderDto = {
    id: TId;
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
