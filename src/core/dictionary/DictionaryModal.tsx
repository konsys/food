import { useStore } from 'effector-react';
import React from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { DictionaryDto } from '../../common/types/dto';
import { MenuTimeModel } from '../../store';
import { DictionaryFields } from './DictionaryFields';

interface Props {
  // model: TCrudStore<DictionaryDto, >;
  title?: string;
}

export function DictionaryModal({ title }: Props) {
  const { $oneStore, createFx, updateFx, getAllDefault } = MenuTimeModel;
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
