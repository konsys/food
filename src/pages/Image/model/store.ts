import { createEvent, createStore } from 'effector';
import { Nullable } from '../../../core/types';

export const setImageBlob = createEvent<Nullable<Blob>>();
export const resetImageBlob = createEvent();

export const $imageBlob = createStore<Nullable<Blob>>(null)
  .on(setImageBlob, (_, res) => res)
  .reset(resetImageBlob);
