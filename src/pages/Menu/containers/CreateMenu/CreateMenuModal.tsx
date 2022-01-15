import { Button, Form, Input, message, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Effect, Event } from 'effector';
import { useStore } from 'effector-react';
import { noop } from 'lodash';
import React, { useEffect, useState } from 'react';
import { DragDrop, IDragDropProps } from '../../../../common/components/drag/DragDrop';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { useValidatedForm } from '../../../../common/form/useValidatedForm';
import { CrudStore } from '../../../../common/models/abstractModel/abstractCrudModel';
import { TPromiseFn } from '../../../../common/types';
import { createListOptions } from '../../../../common/utils/selectUtils';
import { Params } from '../../../../config/params';
import { Nullable } from '../../../../core/types';
import { ImageDto } from '../../../Image/model/types';
import { MenuTimeDto } from '../../../MenuTime/menuTimeModel/types';
import { MenuTypeDto } from '../../../MenuType/model/types';
import { MenuDto } from '../../model/types';

interface Props {
  create: Effect<MenuDto, MenuDto, Error>;
  loadAll: Event<void>;
}
const { $listStore: $menuTimeList, getAllFx: getAllMenuTimeFx } = new CrudStore<MenuTimeDto>(
  '/menu-time'
).createCrudStore();

const { $listStore: $menuTypeList, getAllFx: getAllMenuTypeFx } = new CrudStore<MenuTypeDto>(
  '/menu-type'
).createCrudStore();

const names = columnsNamesGenerator<MenuDto>();

export const CreateMenuModal = ({ create, loadAll }: Props) => {
  const [menuTimeItems, setMenuTimeItems] = useState<JSX.Element[]>();
  const [menuTypeItems, setMenuTypeItems] = useState<JSX.Element[]>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [uploadImagePath, setUloadImagePath] = useState<Nullable<string>>(null);

  const menuTime = useStore($menuTimeList);
  const menuType = useStore($menuTypeList);

  const { Modal, formInstance } = useValidatedForm<MenuDto>();

  const onClose = () => {
    setModalVisible(false);
    formInstance.resetFields();
    setUloadImagePath(null);
  };

  const onSave = (v: MenuDto) => {
    return create(v)
      .then(() => setModalVisible(false))
      .then(loadAll);
  };

  const onFileImage = ({ id, smallImg }: ImageDto) => {
    formInstance.setField({ name: 'imgId', value: id });
    setUloadImagePath(`${Params.BASE_URL}/${smallImg}`);
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
    action: `${Params.BASE_URL}/upload`,
    onChange(info) {
      const { status, response } = info.file;

      if (status === 'done' && response) {
        onFileImage(response);
        message.success(`${info.file.name}. Успешно загружено.`);
      } else if (status === 'error') {
        message.error(`${info.file.name}. Ошибка загрузки.`);
      }
    },
    onDrop() {
      noop();
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
        <Form.Item label='Фото' rules={[{ required: true }]}>
          {!uploadImagePath ? <DragDrop {...props} /> : <img src={uploadImagePath} />}
        </Form.Item>
        <Form.Item name={names('imgId')} hidden>
          <Input />
        </Form.Item>
      </Modal>
      <Button type='primary' onClick={() => setModalVisible(true)}>
        Создать
      </Button>
    </>
  );
};
