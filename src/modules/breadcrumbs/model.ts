import { createEvent, createStore } from "effector";
import { TBreadcrumb } from "./types";


export const updateBreadcrumbsStore = createEvent<TBreadcrumb[]>();


export const $breadcrumsStore = createStore<TBreadcrumb[]>([
]).on(updateBreadcrumbsStore, (prev, item) => ({ ...prev, ...item }));


export const breadcrumbsPaths: TBreadcrumb[] = [
    {
        path: '',
        title: 'Главная',
        uuid: ''
    },
    {
        path: 'restaurants',
        title: 'Главная',
        uuid: ''
    },
]