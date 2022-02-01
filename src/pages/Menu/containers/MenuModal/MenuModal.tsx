import React, { FC } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { TId } from '../../../../common/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields';

interface Props {
  id?: TId;
}

const { createItemFx, getAllDefault, updateItemFx, deleteItemFx, getItem } = MenuModel;
const { createItemFx: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ id }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuDto>();

  return (
    <ModalForm
      onCreate={createItemFx}
      onUpdate={updateItemFx}
      width={600}
      getList={getAllDefault}
      createImage={createImage}
      onDelete={deleteItemFx}
      getItem={getItem}
      id={id}
    >
      <MenuFormFields formInstance={formInstance} />
    </ModalForm>
  );
};
