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

enum EListType {
  MENU_TIME,
  MENU_TYPE,
}

const MenuTimeCrud = new CrudStore<MenuTimeDto>('/menu-time');
const {
  $oneStore: $oneMenuTime,
  $listStore: $menuTimeList,
  getAllFx: getAllMenuTimeFx,
  setItem: setMenuTimeItem,
} = MenuTimeCrud.createCrudStore();

const MenuTypeCrud = new CrudStore<MenuTypeDto>('/menu-type');
const {
  $oneStore: $oneMenuType,
  $listStore: $menuTypeList,
  getAllFx: getAllMenuTypeFx,
  setItem: setMenuTypeItem,
} = MenuTypeCrud.createCrudStore();

const MenuCrud = new CrudStore<MenuDto>('/menu');
const { createFx, $oneStore: $oneMenu } = MenuCrud.createCrudStore();

export const CreateMenuButton = () => {
  const [menuTimeItems, setMenuTimeItems] = useState<JSX.Element[]>();
  const [menuTypeItems, setMenuTypeItems] = useState<JSX.Element[]>();

  const menuTime = useStore($menuTimeList);
  const menuType = useStore($menuTypeList);
  const menuTimeOne = useStore($oneMenuTime);
  const menuTypeOne = useStore($oneMenuType);
  const menuOne = useStore($oneMenu);

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

  // TODO add imgs
  const onFinish = (menu: MenuDto) => {
    createFx({
      ...menu,
      menuTime: menuTimeOne.item!,
      menuType: menuTypeOne.item!,
      averageImg: '111',
      bigImg: '222',
      smallImg: '333',
      description: menu.description,
    }).then(() => setModalOpened(false));
  };

  const onListChange = (k: EListType, id: number) => {
    let v;
    if (k === EListType.MENU_TIME) {
      v = menuTime.items.find((v) => v.id === id);
      setMenuTimeItem(v as MenuTimeDto);
    } else {
      v = menuType.items.find((v) => v.id === id);
      setMenuTypeItem(v as MenuTypeDto);
    }
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
          <Form.Item label='Описание' name='description'>
            <TextArea />
          </Form.Item>
          <Form.Item label='Тип' name='menuType' rules={[{ required: true }]}>
            <Select
              loading={menuType.pending}
              onChange={(value) => onListChange(EListType.MENU_TYPE, value)}
            >
              {menuTypeItems}
            </Select>
          </Form.Item>
          <Form.Item label='Время меню' name='menuTime' rules={[{ required: true }]}>
            <Select
              loading={menuTime.pending}
              onChange={(value) => onListChange(EListType.MENU_TIME, value)}
            >
              {menuTimeItems}
            </Select>
          </Form.Item>
        </CreateMenuItemModal>
      </Form>
    </>
  );
};
