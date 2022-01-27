import { useStore } from 'effector-react';
import React from 'react';
import { MenuTimeModel } from '../../../store';
import { useValidatedForm } from '../../form/useValidatedForm';
import { DictionaryDto } from '../../types/dto';
import { DictionaryFields } from './DictionaryField';

interface Props {
  id?: number;
  title?: string;
}

const { createFx, getAllDefault, updateFx, $oneStore } = MenuTimeModel;

export function DictionaryModal({ id, title }: Props) {
  const { formInstance, ModalForm } = useValidatedForm<DictionaryDto>();

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
}
