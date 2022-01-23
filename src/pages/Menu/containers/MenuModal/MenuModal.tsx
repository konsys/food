import React, { FC } from 'react';
import { ModalWithForm } from '../../../../common/components/ModalWithForm/ModalWithForm';
import { TVoidFn } from '../../../../common/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';

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
    />
  );
};
