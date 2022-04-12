import { useEffect } from "react";
import { homeBreabcrums } from "../../routes/paths";
import { updateBreadcrumbsStore } from "./model";
import { TBreadcrumb } from "./types";



export const useBreadcrumbs = (params: TBreadcrumb[]) => {
    useEffect(() => {
        if (params.length) {
            updateBreadcrumbsStore([homeBreabcrums, ...params]);
        } else {
            updateBreadcrumbsStore([]);
        }
        () => updateBreadcrumbsStore([]);

    }, [params, updateBreadcrumbsStore, homeBreabcrums]);

}
