import { Button, Form, Input, message, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { DragDrop, IDragDropProps } from '../../../../common/components/drag/DragDrop';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CrudStore } from '../../../../common/models/abstractModel/abstractCrudModel';
import { createListOptions } from '../../../../common/utils/selectUtils';
import { MenuTimeDto } from '../../../MenuTime/menuTimeModel/types';
import { MenuTypeDto } from '../../model/menuTypeModel/types';
import { MenuDto } from '../../model/types';

const MenuTimeCrud = new CrudStore<MenuTimeDto>('/menu-time');
const { $listStore: $menuTimeList, getAllFx: getAllMenuTimeFx } = MenuTimeCrud.createCrudStore();

const MenuTypeCrud = new CrudStore<MenuTypeDto>('/menu-type');
const { $listStore: $menuTypeList, getAllFx: getAllMenuTypeFx } = MenuTypeCrud.createCrudStore();

const MenuCrud = new CrudStore<MenuDto>('/menu');
const { createFx } = MenuCrud.createCrudStore();

const names = columnsNamesGenerator<MenuDto>();

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

  const props: IDragDropProps = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:8000/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name}. Успешно загружено.`);
      } else if (status === 'error') {
        message.error(`${info.file.name}. Ошибка загрузки.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
      <Modal visible={modalVisible} title='Меню' onOk={onSave} onCancel={onClose} destroyOnClose>
        <Form.Item label='Название' name={names('name')} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Описание' name={names('description')}>
          <TextArea />
        </Form.Item>
        <Form.Item label='Тип' name={names('typeId')} rules={[{ required: true }]}>
          <Select loading={menuType.pending}>{menuTypeItems}</Select>
        </Form.Item>
        <Form.Item label='Время' name={names('timeId')} rules={[{ required: true }]}>
          <Select loading={menuTime.pending}>{menuTimeItems}</Select>
        </Form.Item>
        <Form.Item label='Фото' name={names('bigImg')} rules={[{ required: true }]}>
          <DragDrop {...props} />
        </Form.Item>
      </Modal>
      <Button type='primary' onClick={() => setModalVisible(true)}>
        Создать
      </Button>
    </>
  );
};
