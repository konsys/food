import { ValidateFields } from 'rc-field-form/es/interface';
import { notification } from 'antd';
import React, { KeyboardEvent } from 'react';
import { TVoidFn } from '../types';
import { ErrorMessage } from '../errors/ErrorMessage';
import { TActionAfterSave, TActionOnRemove, TActionOnSave } from './types';
import { instanceOf } from '../utils/utils';

export function saveItem<T>(
  validate: ValidateFields<T>,
  save: TActionOnSave<T>,
  stopEdit: TVoidFn,
  afterSave: TActionAfterSave<T>
) {
  return validate()
    .catch((v) => {
      notification.error({
        message: <ErrorMessage error={v} message='Ошибка' />,
      });
      return Promise.reject(v);
    })
    .then(save)
    .then((saved) => {
      stopEdit();
      notification.success({ message: 'Cохранено' });
      return saved;
    })
    .then(afterSave);
}

export function removeItem<T>(onRemove: TActionOnRemove<T>, values: T, stopEditing: TVoidFn) {
  return onRemove(values)
    .then(() => notification.success({ message: 'Удалено' }))
    .then(stopEditing);
}

export const enterKeyPressed = (e: KeyboardEvent<HTMLFormElement | HTMLInputElement>) => wasEnterEvent(e) && eventOnInput(e);

export const wasEnterEvent = (e: KeyboardEvent<HTMLFormElement | HTMLInputElement>) => e.key === 'Enter';

export const eventOnInput = (e: KeyboardEvent<HTMLFormElement | HTMLInputElement>) => instanceOf<Element>(e.target, (obj) => !!obj.tagName) && e.target.tagName === 'INPUT';
