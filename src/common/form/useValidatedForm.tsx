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
        children,
        okButtonProps,
        onCreate,
        onUpdate,
        onDelete,
        getList,
        createImage,
        title,
        item,
        buttonType,
        pending,
        createButtonText,
        afterClose,
        loadItem,
        id,
      } = props;

      const [isFormPending, setIsFormPending] = useState<boolean>(false);
      const [modalVisible, setModalVisible] = useState<boolean>(false);
      const [confirmDelete, setConfirmDelete] = useState(false);

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
          .then(() => getList())
          .then(() => setModalVisible(false))
          .catch((reason) => {
            notification.error({ message: <ErrorMessage error={reason} /> });
            return reason;
          })
          .finally(() => setIsFormPending(false));
      };

      const disabledOkBtn = isFormPending || okButtonProps?.disabled;

      const onOpen = () => {
        onClose();
        loadItem && id && loadItem(id);
        setModalVisible(true);
      };

      const onClose = () => {
        setModalVisible(false);
        returnedFormInstance.resetFields();
        resetImageBlob();
        afterClose && afterClose();
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
              <Button type={buttonType} onClick={onOpen}>
                {!createButtonText ? (item?.id ? 'Редактировать' : 'Создать') : createButtonText}
              </Button>
            </Col>
            {onDelete && (
              <Col span={10}>
                <Popconfirm
                  title={`Удалить?`}
                  visible={confirmDelete}
                  onConfirm={() => item?.id && deleteItem(+item.id)}
                  onCancel={() => setConfirmDelete(false)}
                >
                  <Button type={buttonType ?? 'primary'} onClick={() => setConfirmDelete(true)}>
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
              loading: isFormPending || okButtonProps?.loading || pending,
            }}
            onCancel={onClose}
            visible={modalVisible}
            onOk={modalOnOk}
            title={title}
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
