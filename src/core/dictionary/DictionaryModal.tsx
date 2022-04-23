import { ButtonType } from 'antd/lib/button';
import { useGate, useStore } from 'effector-react';
import React, { useState } from 'react';
import { useValidatedForm } from '../../common/form/useValidatedForm';
import { TCrudStore } from '../../common/models/abstractModel/abstractCrudModel';
import { TUuid } from '../../common/types';
import { DictionaryFields } from './DictionaryFields';

type Props<CreateEntity extends { uuid: TUuid }> = {
  model: TCrudStore<CreateEntity>;
  buttonText?: string;
  buttonType?: ButtonType;
  uuid: TUuid;
};

export function DictionaryModal<CreateEntity extends { uuid: TUuid }>({
  model,
  buttonText,
  buttonType,
  uuid,
}: Props<CreateEntity>) {
  const {
    $itemStore,
    createNewItemFx,
    updateItemFx,
    getAllDefault,
    resetOne,
    ItemGate,
  } = model;
  const { ModalForm } = useValidatedForm<CreateEntity>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const item = useStore($itemStore);

  useGate(ItemGate, modalVisible ? uuid : '');

  return (
    <ModalForm
      onCreate={createNewItemFx}
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
