import { createEvent, createStore } from "effector";
import { TBreadcrumb } from "./types";


export const updateBreadcrumbsStore = createEvent<TBreadcrumb[]>();


export const $breadcrumsStore = createStore<TBreadcrumb[]>([
]).on(updateBreadcrumbsStore, (prev, item) => (item));


