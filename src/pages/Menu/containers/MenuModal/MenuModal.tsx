import { Button } from 'antd';
import React, { useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { Nullable, NullableNumber } from '../../../../core/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuForm } from '../MenuForm';
import { MenuDto } from '../../model/types';
import { uuid } from '../../../../common/utils/utils';
import { TVoidFn } from '../../../../common/types';
import { useGate } from 'effector-react';

const { createFx, getAllDefault, OneGate } = MenuModel;
const { createFx: uploadImage } = ImageModel;

interface Props {
  id: NullableNumber;
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
}

export const CreateMenuModal = ({ id, setIsVisible, isVisible }: Props) => {
  useGate(OneGate, id);
  const [uploadImagePath, setUploadImagePath] = useState<Nullable<string>>(null);
  const [imageBlob, setImageBlob] = useState<Nullable<Blob>>(null);

  const { Modal, formInstance } = useValidatedForm<MenuDto>();

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

  const onSave = async (menu: MenuDto) => {
    let imgId = null;
    if (imageBlob) {
      const fd = new FormData();
      fd.append('file', imageBlob, `${uuid()}.jpg`);

      const res = await uploadImage(fd);
      imgId = res.id;
    }

    return createFx({ ...menu, imgId })
      .then(onClose)
      .then(getAllDefault);
  };

  return (
    <>
      <Modal visible={isVisible} title='Меню' onOk={onSave} onCancel={onClose} destroyOnClose>
        <MenuForm
          formInstance={formInstance}
          modalVisible={isVisible}
          uploadImagePath={uploadImagePath}
          setUploadImagePath={setUploadImagePath}
          setImageBlob={setImageBlob}
          imageBlob={imageBlob}
        />
      </Modal>
      <Button type='primary' onClick={onOpen}>
        Создать
      </Button>
    </>
  );
};
