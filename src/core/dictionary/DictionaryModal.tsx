import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryFields } from './DictionaryFields';

interface Props<CreateEntity> {
  model: TCrudStore<CreateEntity>;
  id?: number;
}

export function DictionaryModal<CreateEntity>({ model, id }: Props<CreateEntity>) {
  const { $itemStore, createItemFx, updateItemFx, getAllDefault, resetOne, getItem } = model;
  const { formInstance, ModalForm } = useValidatedForm<CreateEntity>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
