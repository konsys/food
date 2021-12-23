import { createEvent, createStore } from 'effector';
import { TPath } from '../../../routes/types';

export const initialPathState: TPath = { name: '', path: '' };

export const setCurrentPath = createEvent<TPath>();

export const $$route = createStore<TPath>(initialPathState).on(setCurrentPath, (_, path) => path);
