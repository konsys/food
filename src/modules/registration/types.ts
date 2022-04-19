import { TUuid } from "../../common/types"

export type RegistrationDto = {
    uuid: TUuid
    email: string
    password: string
    name: string;
}