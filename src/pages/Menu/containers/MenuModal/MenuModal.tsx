import React, { FC } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields';

interface Props {
  title?: string;
}

const { createItem, getAllDefault, updateItem, deleteItem } = MenuModel;
const { createItem: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ title }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuDto>();

  return (
    <ModalForm
      onCreate={createItem}
      onUpdate={updateItem}
      width={600}
      getList={getAllDefault}
      createImage={createImage}
      onDelete={deleteItem}
      title={title}
      buttonType='primary'
      modalTitle='Элемент меню'
    >
      <MenuFormFields formInstance={formInstance} />
    </ModalForm>
  );
};
