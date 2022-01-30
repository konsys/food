import { ModalProps } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { Effect, Event } from 'effector';
import { FieldData, ValidateFields } from 'rc-field-form/es/interface';
import { ImageDto } from '../../pages/Image/model/types';
import { TypeOrmDeleteResult } from '../api/types';
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
  onCreate: Event<Partial<T>>;
  onUpdate: Event<TItemWithId<T>>;
  buttonType: ButtonType;
  getList: Event<void>;
  createButtonText?: string;
  modalTitle: string;
  onDelete?: Event<number>;
  createImage?: Event<Partial<FormData>>;
  item?: Partial<TItemWithId<T>>;
  pending?: boolean;
  afterClose?: Event<void>;
  loadItem?: Event<number>;
  id?: number;
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
