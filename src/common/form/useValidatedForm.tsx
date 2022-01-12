import { Form, notification } from 'antd';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { FieldData, NamePath } from 'rc-field-form/es/interface';
import { TReturnedForm, TModalWithFormProps, TSetFieldsValue } from './types';
import { MainModal } from '../modal/Modal';
import { AbstractForm } from './AbstractForm';
import { ErrorMessage } from '../errors/ErrorMessage';
import { wasEnterOnInput } from './utils';

export function useValidatedForm<T>(initialValues?: Partial<T>) {
  const [form] = Form.useForm();

  const {
    setFields: validateAndSetFields,
    setFieldsValue: validateAndSetFieldsValue,
    resetFields: setInitialFieldsValue,
    validateFields: validate,
  } = form;

  const resetFields = useCallback(
    (fields?: NamePath[]) => {
      setInitialFieldsValue(fields);
    },
    [setInitialFieldsValue]
  );

  const setFields: (fields: FieldData[], toValidate?: boolean) => void = useCallback(
    (field, toValidate = true) => {
      validateAndSetFields(field);
      toValidate && validate(field.map(({ name }) => name));
    },
    [validateAndSetFields, validate]
  );

  const setFieldsValue: TSetFieldsValue<T> = useCallback(
    (values: any) => {
      validateAndSetFieldsValue(values);
    },
    [validateAndSetFieldsValue]
  );

  const setField: (field: FieldData, toValidate?: boolean) => void = useCallback(
    (field, toValidate = true) => setFields([field], toValidate),
    [setFields]
  );

  const returnedFormInstance = useMemo(
    () => ({ ...form, setFieldsValue, setFields, resetFields, setField }),
    [form, resetFields, setFields, setFieldsValue, setField]
  );

  const ReturnedForm = useCallback(
    (props: TReturnedForm) => {
      return (
        <>
          <AbstractForm
            {...props}
            form={form}
            onValuesChange={(changedValues, values) => {
              props?.onValuesChange?.(changedValues, values);
            }}
          />
        </>
      );
    },
    [form]
  );

  const useFormOnModal: FC<TModalWithFormProps<T>> = useCallback(
    (props) => {
      const { children, okButtonProps, onCancel, onOk, ...otherProps } = props;

      const [isFormPending, setIsFormPending] = useState<boolean>(false);
      const modalOnOk = () => {
        setIsFormPending(true);
        form
          .validateFields()
          .then(onOk)
          .catch((reason) => {
            notification.error({ message: <ErrorMessage error={reason} /> });
            return reason;
          })
          .finally(() => setIsFormPending(false));
      };

      const disabledOkBtn = isFormPending || okButtonProps?.disabled;

      return (
        <MainModal
          {...otherProps}
          okButtonProps={{
            ...okButtonProps,
            disabled: disabledOkBtn,
            loading: isFormPending || okButtonProps?.loading,
          }}
          onCancel={(e) => {
            onCancel?.(e);
          }}
          onOk={modalOnOk}
        >
          <ReturnedForm
            initialValues={initialValues}
            isEdit
            layout='vertical'
            onKeyPress={(e: any) => {
              if (wasEnterOnInput(e) && !disabledOkBtn) {
                modalOnOk();
              }
            }}
          >
            {children}
          </ReturnedForm>
        </MainModal>
      );
    },
    [ReturnedForm, form, initialValues]
  );

  return {
    formInstance: returnedFormInstance,
    Form: ReturnedForm,
    Modal: useFormOnModal,
  };
}
