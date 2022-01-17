import { createEffect, createStore } from 'effector';
import { CrudService } from '../../../common/api';
import { Nullable } from '../../../core/types';
import { ImageDto } from './types';

const service = new CrudService<ImageDto>('upload');

export const createImgFx = createEffect<any, ImageDto, Error>({
  handler: (req) => service.create(req),
});

export const $imageStore = createStore<Nullable<ImageDto>>(null);
