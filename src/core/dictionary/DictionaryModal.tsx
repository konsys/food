import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { TId } from '../../common/types';
import { DictionaryFields } from './DictionaryFields';

type Props<CreateEntity extends { id: TId }> = {
  model: TCrudStore<CreateEntity>;
  buttonText?: string;
};

export function DictionaryModal<CreateEntity extends { id: TId }>({
  model,
  buttonText,
}: Props<CreateEntity>) {
  const { $itemStore, createItemFx, updateItemFx, getAllDefault, resetOne } = model;
  const { ModalForm } = useValidatedForm<CreateEntity>();
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
      buttonText={buttonText}
    >
      <DictionaryFields />
    </ModalForm>
  );
}
