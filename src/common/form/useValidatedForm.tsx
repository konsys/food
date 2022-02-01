import { Button, Col, Form, Row } from 'antd';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { FieldData, NamePath } from 'rc-field-form/es/interface';
import { TModalWithFormProps, TReturnedForm, TSetFieldsValue } from './types';
import { MainModal } from '../modal/Modal';
import { AbstractForm } from './AbstractForm';
import { enterKeyPressed } from './utils';
import { $imageBlob, resetImageBlob } from '../../pages/Image/model/store';
import { useStore } from 'effector-react';
import { isNumber, uuid } from '../utils/utils';
import { DeleteButton } from '../components/buttons/DeleteButton/DeleteButton';

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
      const {
        modalVisible,
        setModalVisible,
        children,
        buttonText,
        onCreate,
        onUpdate,
        onDelete,
        createImage,
        pending,
        afterClose,
        itemProps,
      } = props;

      const { getItem, id, item } = itemProps;
      const [isFormPending, setIsFormPending] = useState<boolean>(false);

      const imageBlob = useStore($imageBlob);

      const modalOnOk = () => {
        setIsFormPending(true);
        form
          .validateFields()
          .then(async (validatedFormItem) => {
            if (imageBlob && createImage) {
              const fd = new FormData();
              fd.append('file', imageBlob, `${uuid()}.jpg`);

              const res = await createImage(fd);
              const imgId = res.id;
              validatedFormItem = { ...validatedFormItem, imgId };
            }
            return validatedFormItem;
          })
          .then((v) => (v?.id ? onUpdate(v) : onCreate(v)))
          .then(() => setModalVisible(false))
          .finally(() => setIsFormPending(false));
      };

      const disabledOkBtn = isFormPending;

      const onOpen = () => {
        onClose();
        getItem && id && getItem(id);
        setModalVisible(true);
      };

      const onClose = () => {
        setModalVisible(false);
        returnedFormInstance.resetFields();
        resetImageBlob();
        afterClose && afterClose();
      };

      const deleteItem = (dId: number) => {
        setIsFormPending(true);
        try {
          onDelete && onDelete(dId);
        } finally {
          setIsFormPending(false);
        }
      };

      return (
        <>
          <Row gutter={[8, 8]}>
            <Col span={onDelete ? 14 : 24} style={{ textAlign: 'left' }}>
              <Button type={id ? 'link' : 'primary'} onClick={onOpen}>
                {buttonText ? buttonText : id ? 'Редактировать' : 'Создать'}
              </Button>
            </Col>
            {onDelete && (
              <Col span={10} style={{ textAlign: 'right' }}>
                {id && isNumber(id) ? <DeleteButton id={id} onDelete={deleteItem} /> : ''}
              </Col>
            )}
          </Row>
          <MainModal
            okButtonProps={{
              disabled: disabledOkBtn,
              loading: isFormPending || pending,
            }}
            onCancel={onClose}
            visible={modalVisible}
            onOk={modalOnOk}
            title={id ? 'Редактировать' : 'Создать'}
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
