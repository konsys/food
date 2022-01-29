import { useGate, useStore } from 'effector-react';
import React from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TId } from '../../common/types';
import { DictionaryDto } from '../../common/types/dto';
import { MenuTimeModel } from '../../store';
import { DictionaryFields } from './DictionaryFields';

interface Props {
  // model: TCrudStore<DictionaryDto, >;
  title?: string;
  id?: TId;
}

export function DictionaryModal({ title, id }: Props) {
  const { $oneStore, createFx, updateFx, getAllDefault, OneGate } = MenuTimeModel;
  const { formInstance, ModalForm } = useValidatedForm<DictionaryDto>();

  useGate(OneGate, id);
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
