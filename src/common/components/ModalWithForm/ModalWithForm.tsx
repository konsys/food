import { Button, Col, Row } from 'antd';
import { Effect, Event } from 'effector';
import React, { ReactNode } from 'react';
import { Nullable, NullableNumber } from '../../../core/types';
import { ImageDto } from '../../../pages/Image/model/types';
import { useValidatedForm } from '../../form/useValidatedForm';
import { TId, TPromiseFn, TVoidFn, TWithId } from '../../types';
import { uuid } from '../../utils/utils';

interface Props<T> {
  id: NullableNumber;
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
  title?: string;
  onCreate: Effect<Partial<T>, T & TWithId, Error>;
  onUpdate: Effect<T & TWithId, T & TWithId, Error>;
  getList: Event<void>;
  onDelete?: TPromiseFn<number>;
  uploadImage?: TPromiseFn<FormData, ImageDto>;
  children: ReactNode;
  formInstance?: any;
  imageBlob?: Nullable<Blob>;
}

export function ModalWithForm<T extends { id?: TId }>({
  id,
  setIsVisible,
  isVisible,
  onDelete,
  title = 'Создать',
  uploadImage,
  onCreate,
  onUpdate,
  getList,
  children,
  formInstance,
  imageBlob,
}: Props<T>) {
  const { Modal } = useValidatedForm<T>();
  const onOpen = () => {
    onClose();
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
    formInstance && formInstance.resetFields();
  };

  const onSave = async (item: T) => {
    return (item?.id ? onUpdate({ ...item, id: item.id }) : onCreate(item)).then(() => getList());
  };

  const onFormSave = async (item: T) => {
    let imgId = null;
    if (imageBlob && uploadImage) {
      const fd = new FormData();
      fd.append('file', imageBlob, `${uuid()}.jpg`);

      const res = await uploadImage(fd);
      imgId = res.id;
      item = { ...item, imgId };
    }

    return onSave(item);
  };

  return (
    <>
      <Modal visible={isVisible} title={title} onOk={onFormSave} onCancel={onClose} destroyOnClose>
        {children}
      </Modal>
      <Row gutter={[8, 8]}>
        <Col span={onDelete ? 14 : 24}>
          <Button type={id ? 'default' : 'primary'} onClick={onOpen}>
            {title}
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
    </>
  );
}
