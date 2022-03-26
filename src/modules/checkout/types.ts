import { CodeCheckDto } from "../codeCheck/types"

export type TCheckoutForm = CodeCheckDto & {
    orderDate: Date
}