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

export const MenuModal: FC<Props> = ({ isEdit, isVisible, setIsVisible, id, title }: Props) => {
  const onSave = async (menu: MenuDto) => {
    return (isEdit ? updateFx({ ...menu, id: menu.id }) : createFx(menu)).then(() =>
      getAllDefault()
    );
  };

  return (
    <ModalWithForm<any>
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      id={id ?? null}
      onSave={onSave}
      uploadImage={uploadImage}
      title={title}
    />
  );
};
