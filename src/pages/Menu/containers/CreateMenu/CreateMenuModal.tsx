import { Button } from 'antd';
import React, { useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { Nullable } from '../../../../core/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuForm } from '../MenuForm';
import { MenuDto } from '../../model/types';
import { uniqueId } from 'lodash';
import { useStore } from 'effector-react';

const { createFx, getAllDefault } = MenuModel;
const { createFx: uploadImage, $oneStore: $image } = ImageModel;

export const CreateMenuModal = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [uploadImagePath, setUploadImagePath] = useState<Nullable<string>>(null);
  const [imageBlob, setImageBlob] = useState<Nullable<Blob>>(null);

  const { Modal, formInstance } = useValidatedForm<MenuDto>();

  const img = useStore($image);

  const onClose = () => {
    setModalVisible(false);
    formInstance.resetFields();
    setUploadImagePath(null);
    setImageBlob(null);
  };

  const onSave = async (menu: MenuDto) => {
    if (imageBlob) {
      const fd = new FormData();
      fd.append('file', imageBlob, `${uniqueId()}.jpg`);

      await uploadImage(fd);
    }

    return createFx(menu).then(onClose).then(getAllDefault);
  };

  return (
    <>
      <Modal visible={modalVisible} title='Меню' onOk={onSave} onCancel={onClose} destroyOnClose>
        <MenuForm
          formInstance={formInstance}
          modalVisible={modalVisible}
          uploadImagePath={uploadImagePath}
          setUploadImagePath={setUploadImagePath}
          setImageBlob={setImageBlob}
          imageBlob={imageBlob}
        />
      </Modal>
      <Button type='primary' onClick={() => setModalVisible(true)}>
        Создать
      </Button>
    </>
  );
};
