import { ButtonType } from 'antd/lib/button';
import { useGate, useStore } from 'effector-react';
import React, { FC, useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { TId } from '../../../../common/types';
import { ImageModel, MenuModel } from '../../../../store';
import { MenuDto } from '../../model/types';
import { MenuFormFields } from '../MenuFormFields/MenuFormFields';

interface Props {
  id: TId;
  buttonText?: string;
  buttonType?: ButtonType;
}

const { createItemFx, getAllDefault, updateItemFx, $itemStore, ItemGate } = MenuModel;
const { createItemFx: createImage } = ImageModel;

export const MenuModal: FC<Props> = ({ buttonText, id, buttonType }: Props) => {
  const { formInstance, ModalForm } = useValidatedForm<MenuDto>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const item = useStore($itemStore);

  useGate(ItemGate, modalVisible ? id : null);

  return (
    <ModalForm
      onCreate={createItemFx}
      onUpdate={updateItemFx}
      width={600}
      getList={getAllDefault}
      createImage={createImage}
      buttonText={buttonText}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      itemState={item}
      buttonType={buttonType}
    >
      <MenuFormFields formInstance={formInstance} />
    </ModalForm>
  );
};
