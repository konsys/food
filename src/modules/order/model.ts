import { createEvent, createStore } from "effector";
import { TOrder } from "./types";


export const updateOrderStore = createEvent<Partial<TOrder>>();


export const $orderStore = createStore<Partial<TOrder>>({
    codeSent: false,
    isCodeValid: true,
    phoneConfirmed: false,
    isTimerRunning: false,
    isPhoneValid: true,
}).on(updateOrderStore, (prev, item) => ({ ...prev, ...item }));
