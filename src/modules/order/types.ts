import { TId, TUuid } from "../../common/types";

export enum EOrderStatus { CREATED = 'CREATED', PAID = 'PAID', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', CLOSED = 'CLOSED' }


export type OrderDto = {
    id: TId;
    date: Date;
    uuid: TUuid;
    status: EOrderStatus;
    price: number;
    places: number;
}
