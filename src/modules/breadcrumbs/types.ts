import { TUuid } from "../../common/types";

export type TBreadcrumb = {
    path: string,
    title: string,
    uuid: TUuid;
}