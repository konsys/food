import { Button, Col, Row } from 'antd';
import { Effect, Event } from 'effector';
import React, { useState } from 'react';
import { Nullable, NullableNumber } from '../../../core/types';
import { ImageDto } from '../../../pages/Image/model/types';
import { MenuForm } from '../../../pages/Menu/containers/MenuForm';
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
}: Props<T>) {
  const [uploadImagePath, setUploadImagePath] = useState<Nullable<string>>(null);
  const [imageBlob, setImageBlob] = useState<Nullable<Blob>>(null);

  const { Modal, formInstance } = useValidatedForm<T>();

  const onOpen = () => {
    onClose();
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
    formInstance.resetFields();
    setUploadImagePath(null);
    setImageBlob(null);
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
        <MenuForm
          formInstance={formInstance}
          modalVisible={isVisible}
          uploadImagePath={uploadImagePath}
          setUploadImagePath={setUploadImagePath}
          setImageBlob={setImageBlob}
          imageBlob={imageBlob}
          id={id}
        />
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
