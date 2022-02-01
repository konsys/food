import { useGate, useStore } from 'effector-react';
import React, { FC, useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { TId } from '../../../../common/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields/MenuFormFields';

interface Props {
  buttonText?: string;
  id: TId;
}

const { createItemFx, getAllDefault, updateItemFx, deleteItemFx, $itemStore, ItemGate } = MenuModel;
const { createItemFx: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ buttonText, id }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuDto>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const item = useStore($itemStore);

  useGate(ItemGate, modalVisible ? id : null);
  console.log(12312313, id);

  return (
    <ModalForm
      onCreate={createItemFx}
      onUpdate={updateItemFx}
      width={600}
      getList={getAllDefault}
      createImage={createImage}
      onDelete={deleteItemFx}
      buttonText={buttonText}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      itemState={item}
    >
      <MenuFormFields formInstance={formInstance} />
    </ModalForm>
  );
};
