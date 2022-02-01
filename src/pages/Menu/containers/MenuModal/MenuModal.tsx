import { useStore } from 'effector-react';
import React, { FC, useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields/MenuFormFields';

interface Props {
  buttonText?: string;
}

const { createItemFx, getAllDefault, updateItemFx, deleteItemFx, $itemStore } = MenuModel;
const { createItemFx: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ buttonText }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuDto>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const item = useStore($itemStore);
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
