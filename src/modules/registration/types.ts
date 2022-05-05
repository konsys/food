import { TUuid } from "../../common/types"

export type RegistrationDto = {
    uuid: TUuid
    phone: string
    password: string
    name: string;
}