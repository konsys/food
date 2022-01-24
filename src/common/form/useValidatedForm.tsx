import { Button, Col, Form, notification, Row } from 'antd';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { FieldData, NamePath } from 'rc-field-form/es/interface';
import { TReturnedForm, TModalWithFormProps, TSetFieldsValue } from './types';
import { MainModal } from '../modal/Modal';
import { AbstractForm } from './AbstractForm';
import { ErrorMessage } from '../errors/ErrorMessage';
import { enterKeyPressed } from './utils';
import { resetImageBlob } from '../../pages/Image/model/store';

export type TFormInstance = ReturnType<typeof useValidatedForm>;

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
      const { children, okButtonProps, onCreate, onUpdate, onDelete, id, getList } = props;

      const [isFormPending, setIsFormPending] = useState<boolean>(false);
      const [visible, setVisible] = useState<boolean>(false);

      const modalOnOk = () => {
        setIsFormPending(true);
        form
          .validateFields()
          .then(id ? onUpdate : onCreate)
          .then(() => getList())
          .catch((reason) => {
            notification.error({ message: <ErrorMessage error={reason} /> });
            return reason;
          })
          .finally(() => setIsFormPending(false));
      };

      const disabledOkBtn = isFormPending || okButtonProps?.disabled;

      const onOpen = () => {
        onClose();
        setVisible(true);
      };

      const onClose = () => {
        setVisible(false);
        returnedFormInstance.resetFields();
        resetImageBlob();
      };

      return (
        <>
          <Row gutter={[8, 8]}>
            <Col span={onDelete ? 14 : 24}>
              <Button type={id ? 'default' : 'primary'} onClick={onOpen}>
                {id ? 'Редактировать' : 'Создать'}
              </Button>
            </Col>
            {onDelete && id && (
              <Col span={10}>
                <Button type='default' onClick={() => onDelete(id)}>
                  Удалить
                </Button>
              </Col>
            )}
          </Row>
          <MainModal
            okButtonProps={{
              ...okButtonProps,
              disabled: disabledOkBtn,
              loading: isFormPending || okButtonProps?.loading,
            }}
            onCancel={onClose}
            visible={visible}
            onOk={modalOnOk}
          >
            <ReturnedForm
              initialValues={initialValues}
              isEdit
              layout='vertical'
              onKeyPress={(e: any) => {
                if (enterKeyPressed(e) && !disabledOkBtn) {
                  modalOnOk();
                }
              }}
            >
              {children}
            </ReturnedForm>
          </MainModal>
        </>
      );
    },
    [ReturnedForm, form, initialValues]
  );

  return {
    formInstance: returnedFormInstance,
    Form: ReturnedForm,
    ModalForm: useFormOnModal,
  };
}
