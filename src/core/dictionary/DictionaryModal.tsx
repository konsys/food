import { useGate, useStore } from 'effector-react';
import React from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { TId } from '../../common/types';
import { DictionaryFields } from './DictionaryFields';
import { DictionaryDto } from './types';

interface Props<CreateEntity, FullEntity> {
  model: TCrudStore<CreateEntity, FullEntity>;
  modalTitle: string;
  createButtonText?: string;
  id?: TId;
}

export function DictionaryModal<CreateEntity, FullEntity>({
  modalTitle,
  id,
  createButtonText,
  model,
}: Props<CreateEntity, FullEntity>) {
  const { $oneStore, createFx, updateFx, getAllDefault, OneGate } = model;
  const { formInstance, ModalForm } = useValidatedForm<FullEntity>();

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
