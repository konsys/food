import { Button } from 'antd';
import React, { useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { Nullable, NullableNumber } from '../../../../core/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuForm } from '../MenuForm';
import { MenuDto } from '../../model/types';
import { uuid } from '../../../../common/utils/utils';
import { TVoidFn } from '../../../../common/types';

const { createFx, getAllDefault, updateFx } = MenuModel;
const { createFx: uploadImage } = ImageModel;

interface Props {
  id: NullableNumber;
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
  isEdit: boolean;
  title?: string;
}

export const MenuModalForm = ({
  id,
  setIsVisible,
  isVisible,
  isEdit,
  title = 'Создать',
}: Props) => {
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

    return (isEdit ? updateFx({ ...menu, id: menu.id }) : createFx({ ...menu, imgId }))
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
          id={id}
        />
      </Modal>
      <Button type='primary' onClick={onOpen}>
        {title}
      </Button>
    </>
  );
};
