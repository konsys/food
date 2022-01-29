import { useGate, useStore } from 'effector-react';
import React from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { TId } from '../../common/types';
import { DictionaryFields } from './DictionaryFields';

interface Props<CreateEntity> {
  model: TCrudStore<CreateEntity>;
  modalTitle: string;
  createButtonText?: string;
  id?: TId;
}

export function DictionaryModal<CreateEntity>({
  modalTitle,
  id,
  createButtonText,
  model,
}: Props<CreateEntity>) {
  const { $oneStore, createFx, updateFx, getAllDefault, OneGate } = model;
  const { formInstance, ModalForm } = useValidatedForm<CreateEntity>();

  useGate(OneGate, id);
  const { item, pending } = useStore($oneStore);

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      width={600}
      getList={getAllDefault}
      modalTitle={modalTitle}
      buttonType={'link'}
      pending={pending}
      createButtonText={createButtonText}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
