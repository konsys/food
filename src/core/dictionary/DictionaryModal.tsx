import { ButtonType } from 'antd/lib/button';
import { useGate, useStore } from 'effector-react';
import React, { useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { TId } from '../../common/types';
import { DictionaryFields } from './DictionaryFields';

type Props<CreateEntity extends { id: TId }> = {
  model: TCrudStore<CreateEntity>;
  buttonText?: string;
  buttonType?: ButtonType;
  id: TId;
};

export function DictionaryModal<CreateEntity extends { id: TId }>({
  model,
  buttonText,
  buttonType,
  id,
}: Props<CreateEntity>) {
  const { $itemStore, createItemFx, updateItemFx, getAllDefault, resetOne, ItemGate } = model;
  const { ModalForm } = useValidatedForm<CreateEntity>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const item = useStore($itemStore);

  useGate(ItemGate, modalVisible ? id : null);

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
      itemState={item}
      buttonType={buttonType}
    >
      <DictionaryFields />
    </ModalForm>
  );
}
