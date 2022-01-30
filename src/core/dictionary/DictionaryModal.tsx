import { ButtonType } from 'antd/lib/button';
import { Event } from 'effector';
import { useStore } from 'effector-react';
import React from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryFields } from './DictionaryFields';

interface Props<CreateEntity> {
  model: TCrudStore<CreateEntity>;
  modalTitle: string;
  buttonType: ButtonType;
  createButtonText?: string;
  getItem?: Event<number>;
  id?: number;
}

export function DictionaryModal<CreateEntity>({
  modalTitle,
  buttonType,
  createButtonText,
  model,
  getItem,
  id,
}: Props<CreateEntity>) {
  const { $oneStore, createItemFx, updateItemFx, getAllDefault, resetOne } = model;
  const { formInstance, ModalForm } = useValidatedForm<CreateEntity>();

  const { item, pending } = useStore($oneStore);

  return (
    <ModalForm
      onCreate={createItemFx}
      onUpdate={updateItemFx}
      width={600}
      getList={getAllDefault}
      modalTitle={modalTitle}
      buttonType={buttonType}
      pending={pending}
      afterClose={resetOne}
      createButtonText={createButtonText}
      getItem={getItem}
      id={id}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
