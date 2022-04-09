import { createEvent, createStore } from "effector";
import { Nullable } from "../../core/types";
import { RestaurantMenuDto } from "./types";


export const updatSelectedMenuItem = createEvent<RestaurantMenuDto>();


export const $selectedMenuItemStore = createStore<Nullable<RestaurantMenuDto>>(null).on(updatSelectedMenuItem, (prev, item) => ({ ...prev, ...item }));

