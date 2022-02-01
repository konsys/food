import { useStore } from 'effector-react';
import React, { FC, useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { TId } from '../../../../common/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields/MenuFormFields';

interface Props {
  id?: TId;
  buttonText?: string;
}

const { createItemFx, getAllDefault, updateItemFx, deleteItemFx, getItem, $itemStore } = MenuModel;
const { createItemFx: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ id, buttonText }: Props) => {
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
      itemProps={{ getItem, id, item }}
    >
      <MenuFormFields formInstance={formInstance} />
    </ModalForm>
  );
};
