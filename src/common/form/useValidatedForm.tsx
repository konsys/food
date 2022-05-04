import { Button, Col, Form, Row } from 'antd';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FieldData, NamePath } from 'rc-field-form/es/interface';
import { useStore } from 'effector-react';
import { TModalWithFormProps, TReturnedForm, TSetFieldsValue } from './types';
import { MainModal } from '../modal/Modal';
import { AbstractForm } from './AbstractForm';
import { enterKeyPressed } from './utils';
import { $imageBlob, resetImageBlob } from '../../modules/image/model/store';
import { generateUuid } from '../utils/utils';
import { TItemWithUuid } from '../types';

export function useValidatedForm<T, ReturnType = T>(
  initialValues?: Partial<T>,
) {
  const [form] = Form.useForm<TItemWithUuid<T>>();

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
    [setInitialFieldsValue],
  );

  const setFields: (fields: FieldData[], toValidate?: boolean) => void =
    useCallback(
      (field, toValidate = true) => {
        validateAndSetFields(field);
        toValidate && validate(field.map(({ name }) => name));
      },
      [validateAndSetFields, validate],
    );

  const setFieldsValue: TSetFieldsValue<T> = useCallback(
    (values: any) => {
      validateAndSetFieldsValue(values);
    },
    [validateAndSetFieldsValue],
  );

  const setField: (field: FieldData, toValidate?: boolean) => void =
    useCallback(
      (field, toValidate = true) => setFields([field], toValidate),
      [setFields],
    );

  const returnedFormInstance = useMemo(
    () => ({ ...form, setFieldsValue, setFields, resetFields, setField }),
    [form, resetFields, setFields, setFieldsValue, setField],
  );

  const ReturnedForm = useCallback(
    (props: TReturnedForm) => (
      <AbstractForm
        {...props}
        form={form}
        onValuesChange={(changedValues, values) => {
          props?.onValuesChange?.(changedValues, values);
        }}
      />
    ),
    [form],
  );

  const useFormOnModal: FC<TModalWithFormProps<TItemWithUuid<T>, ReturnType>> =
    useCallback(
      (props) => {
        const {
          modalVisible,
          setModalVisible,
          children,
          buttonText,
          onCreate,
          onUpdate,
          createImage,
          pending,
          afterClose,
          itemState,
          buttonType = 'primary',
          buttonClassName,
          title,
          afterCreate,
          modalOnOk,
        } = props;

        const uuid = itemState?.item?.uuid;
        const [isFormPending, setIsFormPending] = useState<boolean>(false);

        const imageBlob = useStore($imageBlob);

        useEffect(() => {
          if (itemState?.item) {
            returnedFormInstance.setFieldsValue(itemState?.item);
          } else {
            resetImageBlob();
            returnedFormInstance.resetFields();
          }
        }, [itemState]);

        const modalOnOkInner = () => {
          setIsFormPending(true);
          form
            .validateFields()
            .then(async (validatedFormItem) => {
              let returnValue = { ...validatedFormItem };
              if (imageBlob && createImage) {
                const fd = new FormData();
                fd.append('file', imageBlob, `${generateUuid()}.jpg`);

                const res = await createImage(fd);
                const imgUuid = res.uuid;
                returnValue = { ...validatedFormItem, imgUuid };
              }
              return returnValue;
            })
            .then(async (v) => {
              if (onUpdate) {
                const res = await onUpdate(v);

                return res;
              }
              if (onCreate) {
                const res = await onCreate(v);
                if (afterCreate) {
                  afterCreate(res);
                }
                return res;
              }
              return v;
            })
            .then(() => setModalVisible(false))
            .finally(() => setIsFormPending(false));
        };

        const disabledOkBtn = isFormPending;

        const onOpen = () => {
          onClose();
          setModalVisible(true);
        };

        const onClose = () => {
          setModalVisible(false);
          returnedFormInstance.resetFields();
          resetImageBlob();
          afterClose && afterClose();
        };

        const mopdalTitle = title ?? (uuid ? 'Редактировать' : 'Создать');

        return (
          <>
            <Row gutter={8}>
              <Col span={24} style={{ textAlign: 'left' }}>
                <Button
                  type={buttonType}
                  onClick={onOpen}
                  className={buttonClassName ?? ''}
                >
                  {buttonText ||
                    (itemState?.item ? 'Редактировать' : 'Создать')}
                </Button>
              </Col>
            </Row>
            <MainModal
              okButtonProps={{
                disabled: disabledOkBtn,
                loading: isFormPending || pending,
              }}
              onCancel={onClose}
              visible={modalVisible}
              onOk={modalOnOk || modalOnOkInner}
              title={mopdalTitle}
            >
              <ReturnedForm
                initialValues={initialValues}
                isEdit
                layout="vertical"
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
      [ReturnedForm, form, initialValues],
    );

  return {
    formInstance: returnedFormInstance,
    Form: ReturnedForm,
    ModalForm: useFormOnModal,
  };
}
