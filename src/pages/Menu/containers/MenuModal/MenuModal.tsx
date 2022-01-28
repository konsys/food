import React, { FC } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields';

interface Props {
  title?: string;
  onlyCreate?: boolean;
}

const { createFx, getAllDefault, updateFx, deleteFx } = MenuModel;
const { createFx: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ title, onlyCreate }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuDto>();

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      width={600}
      getList={getAllDefault}
      createImage={createImage}
      onDelete={onlyCreate ? undefined : deleteFx}
      title={title}
      buttonType='primary'
    >
      <MenuFormFields formInstance={formInstance} />
    </ModalForm>
  );
};
