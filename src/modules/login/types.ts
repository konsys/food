import { TUuid } from "../../common/types";

export type LoginDto = {
    uuid: TUuid;
    phone: string;
    password: string;
}

export type TTokens = { accessToken: string; refreshToken: string }
