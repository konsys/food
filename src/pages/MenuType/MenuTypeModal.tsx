import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { DictionaryFields } from '../../core/dictionary/DictionaryFields';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { MenuTypeModel } from '../../store';
import { MenuTypeDto } from './model/types';

interface Props {
  id?: number;
  title?: string;
}

const { createFx, getAllDefault, updateFx, deleteFx, $oneStore } = MenuTypeModel;

export const MenuTypeModal: FC<Props> = ({ id, title }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuTypeDto>();
  const item = useStore($oneStore);

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      width={600}
      getList={getAllDefault}
      onDelete={deleteFx}
      title={title}
      buttonType='link'
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
};
