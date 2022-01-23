import { createEvent, createStore } from 'effector';
import { Nullable } from '../../../core/types';

export const setImageBlob = createEvent<Nullable<Blob>>();
export const resetImageBlob = createEvent();

export const $imageBlob = createStore<Nullable<Blob>>(null)
  .on(setImageBlob, (_, res) => res)
  .reset(resetImageBlob);

export const setUploadImagePath = createEvent<Nullable<string>>();
export const resetUploadImagePath = createEvent();

export const $imagePath = createStore<Nullable<string>>(null)
  .on(setUploadImagePath, (_, res) => res)
  .reset(resetUploadImagePath);
