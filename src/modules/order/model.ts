import { createEvent, createStore } from "effector";
import { OrderDto } from "./types";


export const updateOrderStore = createEvent<Partial<OrderDto>>();


export const $orderStore = createStore<Partial<OrderDto>>({
}).on(updateOrderStore, (prev, item) => ({ ...prev, ...item })); 