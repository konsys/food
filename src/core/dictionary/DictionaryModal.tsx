import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryFields } from './DictionaryFields';

type Props<CreateEntity> = {
  model: TCrudStore<CreateEntity>;
};

export function DictionaryModal<CreateEntity>({ model }: Props<CreateEntity>) {
  const { $itemStore, createItemFx, updateItemFx, getAllDefault, resetOne, getItem } = model;
  const { formInstance, ModalForm } = useValidatedForm<CreateEntity>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const item = useStore($itemStore);

  return (
    <ModalForm
      onCreate={createItemFx}
      onUpdate={updateItemFx}
      width={600}
      getList={getAllDefault}
      pending={item.pending}
      afterClose={resetOne}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      itemProps={{
        getItem,
        id: 425,
        item: item,
      }}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
