import { Button, Col, Form, notification, Popconfirm, Row } from 'antd';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { FieldData, NamePath } from 'rc-field-form/es/interface';
import { TReturnedForm, TModalWithFormProps, TSetFieldsValue } from './types';
import { MainModal } from '../modal/Modal';
import { AbstractForm } from './AbstractForm';
import { ErrorMessage } from '../errors/ErrorMessage';
import { enterKeyPressed } from './utils';
import { $imageBlob, resetImageBlob } from '../../pages/Image/model/store';
import { useStore } from 'effector-react';
import { uuid } from '../utils/utils';

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
      const { children, okButtonProps, onCreate, onUpdate, onDelete, id, getList, createImage } =
        props;

      const [isFormPending, setIsFormPending] = useState<boolean>(false);
      const [visible, setVisible] = useState<boolean>(false);
      const [confirmVisible, setConfirmVisible] = useState(false);

      const imageBlob = useStore($imageBlob);
      const modalOnOk = () => {
        setIsFormPending(true);
        form
          .validateFields()
          .then(async (item) => {
            if (imageBlob && createImage) {
              const fd = new FormData();
              fd.append('file', imageBlob, `${uuid()}.jpg`);

              const res = await createImage(fd);
              const imgId = res.id;
              item = { ...item, imgId };
            }
            return item;
          })
          .then(id ? onUpdate : onCreate)
          .then(() => getList())
          .then(() => setVisible(false))
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

      const deleteItem = async (id: number) => {
        setIsFormPending(true);
        onDelete &&
          onDelete(id)
            .then(() => getList())
            .catch((reason) => {
              notification.error({ message: <ErrorMessage error={reason} /> });
              return reason;
            })
            .finally(() => setIsFormPending(false));
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
                <Popconfirm
                  title='Удалить?'
                  visible={confirmVisible}
                  onConfirm={() => deleteItem(id)}
                  onCancel={() => setConfirmVisible(false)}
                >
                  <Button type='default' onClick={() => setConfirmVisible(true)}>
                    Удалить
                  </Button>
                </Popconfirm>
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
