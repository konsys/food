import { useStore } from 'effector-react';
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
  createButtonText,
  model,
}: Props<CreateEntity>) {
  const { $oneStore, createFx, updateFx, getAllDefault, resetOne } = model;
  const { formInstance, ModalForm } = useValidatedForm<CreateEntity>();

  const { item, pending } = useStore($oneStore);

  return (
    <ModalForm
      onCreate={createFx}
      onUpdate={updateFx}
      width={600}
      getList={getAllDefault}
      modalTitle={modalTitle}
      buttonType={'primary'}
      pending={pending}
      afterClose={resetOne}
      createButtonText={createButtonText}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
