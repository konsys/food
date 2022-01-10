import { Button, Form, Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { CrudStore } from '../../../../common/models/abstractModel/abstractCrudModel';
import { createListOptions } from '../../../../common/utils/selectUtils';
import { MenuTimeDto } from '../../model/menuTimeModel/types';
import { MenuTypeDto } from '../../model/menuTypeModel/types';
import { MenuDto } from '../../model/types';
import { CreateMenuItemModal } from './CreateMenuItemModal.tsx';

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

  const [modalOpened, setModalOpened] = useState<boolean>(false);

  useEffect(() => {
    if (modalOpened) {
      getAllMenuTypeFx({ limit: 20, page: 1 });
      getAllMenuTimeFx({ limit: 20, page: 1 });
    }
  }, [modalOpened]);

  useEffect(() => {
    createListOptions(menuTime.items, setMenuTimeItems);
  }, [menuTime.items]);

  useEffect(() => {
    createListOptions(menuType.items, setMenuTypeItems);
  }, [menuType.items]);

  const [form] = Form.useForm();

  const onFinish = (menu: MenuDto) => {
    createFx(menu);
  };

  return (
    <>
      <Button type='primary' onClick={() => setModalOpened(true)}>
        Создать
      </Button>
      <Form<MenuDto>
        onFinish={onFinish}
        form={form}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete='off'
      >
        <CreateMenuItemModal
          isModalVisible={modalOpened}
          onCancel={() => setModalOpened(false)}
          onOk={form.submit}
          title={'Создать'}
        >
          <Form.Item label='Название' name='name' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label='Описание' name='description' rules={[]}>
            <TextArea />
          </Form.Item>
          <Form.Item label='Тип' name='menuType' rules={[{ required: true }]}>
            <Select loading={menuType.pending}>{menuTypeItems}</Select>
          </Form.Item>
          <Form.Item label='Время меню' name='menuTime' rules={[{ required: true }]}>
            <Select loading={menuTime.pending}>{menuTimeItems}</Select>
          </Form.Item>
        </CreateMenuItemModal>
      </Form>
    </>
  );
};
