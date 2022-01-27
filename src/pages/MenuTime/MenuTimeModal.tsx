import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { DictionaryFields } from '../../common/components/dictionary/DictionaryFields';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { MenuTimeModel } from '../../store';
import { MenuTimeDto } from './menuTimeModel/types';

interface Props {
  id?: number;
  title?: string;
}

const { createFx, getAllDefault, updateFx, $oneStore } = MenuTimeModel;

export const MenuTimeModal: FC<Props> = ({ id, title }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuTimeDto>();
  const item = useStore($oneStore);

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      id={id}
      width={600}
      getList={getAllDefault}
      title={title}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
};
