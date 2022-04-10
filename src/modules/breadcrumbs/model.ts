import { createEvent, createStore } from "effector";
import { TBreadcrumb } from "./types";


export const updateBreadcrumbsStore = createEvent<TBreadcrumb[]>();


export const $breadcrumsStore = createStore<TBreadcrumb[]>([{
    path: '/',
    title: 'Главная',
    key: ''
}
]).on(updateBreadcrumbsStore, (prev, item) => ({ ...prev, ...item }));
