import { TUuid } from "../../common/types"

export type RegistrationDto = {
    uuid: TUuid
    login: string
    password: string
}