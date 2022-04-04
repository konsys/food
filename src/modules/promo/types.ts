import { TUuid } from "../../common/types";

export type PromoDto = {
    uuid: TUuid;
    code: string;
    createdAt: Date;
    expiredAt: Date;
    percentDiscount: number;
} 
