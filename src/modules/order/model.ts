import { createEvent, createStore } from "effector";
import { OrderDto } from "./types";


export const updateOrderStore = createEvent<Partial<OrderDto>>();


export const $orderStore = createStore<Partial<OrderDto>>({
    codeSent: false,
    isCodeValid: true,
    phoneConfirmed: false,
    isTimerRunning: false,
    isPhoneValid: true,
}).on(updateOrderStore, (prev, item) => ({ ...prev, ...item }));

$orderStore.watch(console.log)