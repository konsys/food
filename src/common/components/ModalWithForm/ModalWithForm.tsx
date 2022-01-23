import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import { Nullable, NullableNumber } from '../../../core/types';
import { ImageDto } from '../../../pages/Image/model/types';
import { MenuForm } from '../../../pages/Menu/containers/MenuForm';
import { useValidatedForm } from '../../form/useValidatedForm';
import { TPromiseFn, TVoidFn } from '../../types';
import { uuid } from '../../utils/utils';

interface Props<T> {
  id: NullableNumber;
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
  title?: string;
  onSave: TPromiseFn<T>;
  onDelete?: TPromiseFn<number>;
  uploadImage?: TPromiseFn<FormData, ImageDto>;
}

export function ModalWithForm<T>({
  id,
  setIsVisible,
  isVisible,
  onDelete,
  title = 'Создать',
  uploadImage,
  onSave,
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
