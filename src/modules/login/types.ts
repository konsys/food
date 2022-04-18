import { TUuid } from "../../common/types";

export type LoginDto = {
    uuid: TUuid;
    username: string;
    password: string;
}