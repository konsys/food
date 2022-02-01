import { ModalProps } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { Event } from 'effector';
import { FieldData, ValidateFields } from 'rc-field-form/es/interface';
import { ReactNode } from 'react';
import { ImageDto } from '../../pages/Image/model/types';
import {
  TCreateItemFx,
  TDeleteItemFx,
  TUpdateItemFx,
} from '../models/abstractModel/abstractCrudModel';
import { TId, TItemWithId, TPromiseFn, TVoidFn } from '../types';
import { AbstractFormProps } from './AbstractForm';

export type TSetFieldsValue<T> = (item: Partial<T> | null) => void;
export type TSetField = (field: FieldData, validate?: boolean) => void;

export type TActionAfterSave<T> = (saved: T) => void;
export type TActionOnSave<T> = TPromiseFn<T, T>;
export type TActionOnRemove<T> = TPromiseFn<T, unknown>;
export type TActionAfterCancel<T> = TPromiseFn<void, T>;
export type TResetFields = (fields?: any[]) => void;

export type TModalWithFormProps<T> = ModalProps & {
  onCreate: TCreateItemFx<Partial<T>, TItemWithId<T>>;
  onUpdate: TUpdateItemFx<TItemWithId<T>>;
  onDelete?: TDeleteItemFx;
  getList: Event<void>;
  createImage?: TCreateItemFx<Partial<FormData>, ImageDto>;
  pending?: boolean;
  getItem?: Event<number>;
  id?: TId;
  buttonText?: string;
};

export type TReturnedForm = AbstractFormProps;

export type TRenderProps<T> = {
  isEditMode: boolean;
  setFieldsValue: TSetFieldsValue<T>;
  getFieldsValue: () => T;
  stopEditing: TVoidFn;
  setFields: (fields: FieldData[]) => void;
  validateFields: ValidateFields<T>;
  getFieldValue: (key: any) => any;
  setField: TSetField;
  resetFields: TResetFields;
};
