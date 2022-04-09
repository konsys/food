import { createEvent, createStore } from "effector";
import { CartDto } from "./types";


export const updateCartStore = createEvent<Partial<CartDto>>();


export const $cartStore = createStore<Partial<CartDto>>({}).on(updateCartStore, (prev, item) => ({ ...prev, ...item }));

