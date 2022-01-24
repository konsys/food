import React, { FC } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields';

interface Props {
  isEdit: boolean;
  id?: number;
}

const { createFx, getAllDefault, updateFx, deleteFx } = MenuModel;
const { createFx: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ id }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuDto>();

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      id={id}
      width={600}
      getList={getAllDefault}
      createImage={createImage}
      onDelete={deleteFx}
    >
      <MenuFormFields formInstance={formInstance} id={id} />
    </ModalForm>
  );
};
