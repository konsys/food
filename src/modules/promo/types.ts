export type PromoDto = {
    uuid: TUuid;
    code: string;
    createdAt: Date;
    expiredAt: Date;
    percentDiscount: number;
} 
