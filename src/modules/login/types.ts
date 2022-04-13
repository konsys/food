import { TUuid } from "../../common/types";

export type LoginDto = {
    uuid: TUuid;
    login: string;
    password: string;
    description?: string;
    createdAt?: Date;
    expiredAt: Date;
}