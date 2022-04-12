import { useEffect } from "react";
import { paths } from "../../routes/paths";
import { updateBreadcrumbsStore } from "./model";
import { TBreadcrumb } from "./types";

export const homeBreabcrums: TBreadcrumb = {
    path: paths.HOME.path ?? '',
    title: paths.HOME.name
}

export const restaurantBreabcrums: TBreadcrumb = {
    path: paths.RESTAURANTS.path ?? '',
    title: paths.RESTAURANTS.name
}

export const useBreadcrumbs = (params: TBreadcrumb[]) => {
    useEffect(() => {
        updateBreadcrumbsStore([homeBreabcrums, ...params]);
    }, [params, updateBreadcrumbsStore, homeBreabcrums]);

}
