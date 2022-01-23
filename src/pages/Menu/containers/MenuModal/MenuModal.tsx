import React, { FC, useState } from 'react';
import { ModalWithForm } from '../../../../common/components/ModalWithForm/ModalWithForm';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { TVoidFn } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields';

interface Props {
  isEdit: boolean;
  isVisible: boolean;
  setIsVisible: TVoidFn<boolean>;
  id?: number;
  title?: string;
}

const { createFx, getAllDefault, updateFx } = MenuModel;
const { createFx: uploadImage } = ImageModel;

export const MenuModal: FC<Props> = ({ isVisible, setIsVisible, id, title }: Props) => {
  const { formInstance } = useValidatedForm<MenuDto>();

  const [uploadImagePath, setUploadImagePath] = useState<Nullable<string>>(null);
  const [imageBlob, setImageBlob] = useState<Nullable<Blob>>(null);

  return (
    <ModalWithForm<MenuDto>
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      id={id ?? null}
      uploadImage={uploadImage}
      title={title}
      onCreate={createFx}
      getList={getAllDefault}
      onUpdate={updateFx}
    >
      <MenuFormFields
        formInstance={formInstance}
        modalVisible={isVisible}
        uploadImagePath={uploadImagePath}
        setUploadImagePath={setUploadImagePath}
        setImageBlob={setImageBlob}
        imageBlob={imageBlob}
        id={id ?? null}
      />
    </ModalWithForm>
  );
};
