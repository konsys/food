import { TUuid } from "../../common/types";

export type LoginDto = {
    uuid: TUuid;
    login: string;
    password: string;
    expiredAt: Date;
}