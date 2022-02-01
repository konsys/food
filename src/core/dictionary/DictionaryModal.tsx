import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { TGetItem } from '../../common/form/types';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { DictionaryFields } from './DictionaryFields';

type Props<CreateEntity> = {
  model: TCrudStore<CreateEntity>;
  itemProps: TGetItem<CreateEntity>;
};

export function DictionaryModal<CreateEntity>({ model, itemProps }: Props<CreateEntity>) {
  const { $itemStore, createItemFx, updateItemFx, getAllDefault, resetOne } = model;
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
      itemProps={itemProps}
    >
      <DictionaryFields formInstance={formInstance} item={item} />
    </ModalForm>
  );
}
