import { useStore } from 'effector-react';
import React from 'react';
import { MenuTimeModel } from '../../../store';
import { useValidatedForm } from '../../form/useValidatedForm';
import { DictionaryDto } from '../../types/dto';
import { DictionaryFields } from './DictionaryFields';

interface Props {
  title?: string;
}

const { createFx, getAllDefault, updateFx, $oneStore } = MenuTimeModel;

export function DictionaryModal({ title }: Props) {
  const { formInstance, ModalForm } = useValidatedForm<DictionaryDto>();

  const item = useStore($oneStore);

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      width={600}
      getList={getAllDefault}
      title={title}
      buttonType={'link'}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
