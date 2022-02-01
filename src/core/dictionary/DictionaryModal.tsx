import { Event } from 'effector';
import { useStore } from 'effector-react';
import React from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryFields } from './DictionaryFields';

interface Props<CreateEntity> {
  model: TCrudStore<CreateEntity>;
  getItem?: Event<number>;
  id?: number;
}

export function DictionaryModal<CreateEntity>({ model, getItem, id }: Props<CreateEntity>) {
  const { $itemStore, createItemFx, updateItemFx, getAllDefault, resetOne } = model;
  const { formInstance, ModalForm } = useValidatedForm<CreateEntity>();

  const { item, pending } = useStore($itemStore);

  return (
    <ModalForm
      onCreate={createItemFx}
      onUpdate={updateItemFx}
      width={600}
      getList={getAllDefault}
      pending={pending}
      afterClose={resetOne}
      getItem={getItem}
      id={id}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
