import { Button } from 'antd';
import React, { useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { Nullable } from '../../../../core/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuForm } from '../MenuForm';
import { MenuDto } from '../../model/types';
import { ImageDto } from '../../../Image/model/types';

type TSaveMenu = { img: Partial<ImageDto>; menu: MenuDto };
const { createFx, getAllDefault } = MenuModel;
const { createFx: uploadImage } = ImageModel;

export const CreateMenuModal = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [uploadImagePath, setUploadImagePath] = useState<Nullable<string>>(null);
  const [imgUrl, setImageUrl] = useState<string>('');

  const { Modal, formInstance } = useValidatedForm<MenuDto>();

  const onClose = () => {
    setModalVisible(false);
    formInstance.resetFields();
    setUploadImagePath(null);
    setImageUrl('');
  };

  const onSave = async (menu: MenuDto) => {
    const res = await fetch(imgUrl).then((v) => v.blob());

    console.log(2222222222, imgUrl, uploadImagePath);

    const fd = new FormData();
    fd.append('name', 'test2.jpg');
    fd.append('filename', 'test.jpg');
    fd.append('file', res);

    await uploadImage(fd as any);
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
          setImageUrl={setImageUrl}
          imgUrl={imgUrl}
        />
      </Modal>
      <Button type='primary' onClick={() => setModalVisible(true)}>
        Создать
      </Button>
    </>
  );
};
