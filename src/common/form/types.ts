import { ModalProps } from 'antd';
import { Effect, Event } from 'effector';
import { FieldData, ValidateFields } from 'rc-field-form/es/interface';
import { TId, TPromiseFn, TVoidFn, TWithId } from '../types';
import { AbstractFormProps } from './AbstractForm';

export type TSetFieldsValue<T> = (item: Partial<T> | null) => void;
export type TSetField = (field: FieldData, validate?: boolean) => void;

export type TActionAfterSave<T> = (saved: T) => void;
export type TActionOnSave<T> = TPromiseFn<T, T>;
export type TActionOnRemove<T> = TPromiseFn<T, unknown>;
export type TActionAfterCancel<T> = TPromiseFn<void, T>;
export type TResetFields = (fields?: any[]) => void;

// export type TModalWithFormProps<T> = Omit<ModalProps, 'onOk'> & {
//   onOk: TPromiseFn<T, T | void>;
// };

export type TModalWithFormProps<T> = ModalProps & {
  onCreate: Effect<Partial<T>, T & TWithId, Error>;
  onUpdate: Effect<T & TWithId, T & TWithId, Error>;
  onDelete?: TPromiseFn<number>;
  id: TId;
  getList: Event<void>;
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
