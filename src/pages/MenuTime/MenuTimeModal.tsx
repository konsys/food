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

export const MenuTimeModal: FC<Props> = ({ title }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuTimeDto>();
  const item = useStore($oneStore);

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      width={600}
      getList={getAllDefault}
      title={title}
      buttonType='link'
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
};
