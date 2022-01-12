import { Button, Form, Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CrudStore } from '../../../../common/models/abstractModel/abstractCrudModel';
import { createListOptions } from '../../../../common/utils/selectUtils';
import { MenuTimeDto } from '../../model/menuTimeModel/types';
import { MenuTypeDto } from '../../model/menuTypeModel/types';
import { MenuDto } from '../../model/types';

const MenuTimeCrud = new CrudStore<MenuTimeDto>('/menu-time');
const { $listStore: $menuTimeList, getAllFx: getAllMenuTimeFx } = MenuTimeCrud.createCrudStore();

const MenuTypeCrud = new CrudStore<MenuTypeDto>('/menu-type');
const { $listStore: $menuTypeList, getAllFx: getAllMenuTypeFx } = MenuTypeCrud.createCrudStore();

const MenuCrud = new CrudStore<MenuDto>('/menu');
const { createFx } = MenuCrud.createCrudStore();

export const CreateMenuButton = () => {
  const [menuTimeItems, setMenuTimeItems] = useState<JSX.Element[]>();
  const [menuTypeItems, setMenuTypeItems] = useState<JSX.Element[]>();

  const menuTime = useStore($menuTimeList);
  const menuType = useStore($menuTypeList);

  const { Modal, formInstance } = useValidatedForm<MenuDto>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onClose = () => {
    setModalVisible(false);
    formInstance.resetFields();
  };

  const onSave = (v: MenuDto) => {
    return createFx(v).then(() => setModalVisible(false));
  };

  useEffect(() => {
    if (modalVisible) {
      getAllMenuTypeFx({ limit: 20, page: 1 });
      getAllMenuTimeFx({ limit: 20, page: 1 });
    }
  }, [modalVisible]);

  useEffect(() => {
    createListOptions(menuTime.items, setMenuTimeItems);
  }, [menuTime.items]);

  useEffect(() => {
    createListOptions(menuType.items, setMenuTypeItems);
  }, [menuType.items]);

  return (
    <>
      <Modal visible={modalVisible} title='Меню' onOk={onSave} onCancel={onClose} destroyOnClose>
        <Form.Item label='Название' name='name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Описание' name='description'>
          <TextArea />
        </Form.Item>
        <Form.Item label='Тип' name='typeId' rules={[{ required: true }]}>
          <Select loading={menuType.pending}>{menuTypeItems}</Select>
        </Form.Item>
        <Form.Item label='Время меню' name='timeId' rules={[{ required: true }]}>
          <Select loading={menuTime.pending}>{menuTimeItems}</Select>
        </Form.Item>
      </Modal>
      <Button type='primary' onClick={() => setModalVisible(true)}>
        Создать
      </Button>
    </>
  );
};
