import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import TextArea from 'antd/lib/input/TextArea';
import { MenuDto } from '../../model/types';
import { Nullable } from '../../../../core/types';
import { useStore } from 'effector-react';
import { MenuTimeModel, MenuTypeModel } from '../../../../store';
import { createListOptions } from '../../../../common/utils/selectUtils';
import { TVoidFn } from '../../../../common/types';
import { ImageCrop } from '../../../../common/components/ImageCrop';

const { $listStore: $menuTimeList, getAllFx: getAllMenuTimeFx } = MenuTimeModel;
const { $listStore: $menuTypeList, getAllFx: getAllMenuTypeFx } = MenuTypeModel;

const names = columnsNamesGenerator<MenuDto>();

interface Props {
  modalVisible: boolean;
  // TODO add type
  formInstance: any;
  uploadImagePath: Nullable<string>;
  setUploadImagePath: TVoidFn<string>;
  imageBlob: Nullable<Blob>;
  setImageBlob: TVoidFn<Blob>;
}

export const MenuForm = ({ modalVisible, setImageBlob }: Props) => {
  const menuTime = useStore($menuTimeList);
  const menuType = useStore($menuTypeList);

  const [menuTimeItems, setMenuTimeItems] = useState<JSX.Element[]>();
  const [menuTypeItems, setMenuTypeItems] = useState<JSX.Element[]>();

  useEffect(() => {
    createListOptions(menuTime.items, setMenuTimeItems);
  }, [menuTime.items]);

  useEffect(() => {
    createListOptions(menuType.items, setMenuTypeItems);
  }, [menuType.items]);

  useEffect(() => {
    if (modalVisible) {
      getAllMenuTypeFx({ limit: 20, page: 1 });
      getAllMenuTimeFx({ limit: 20, page: 1 });
    }
  }, [modalVisible]);

  return (
    <>
      <Form.Item label='Название' name={names('name')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label='Описание' name={names('description')}>
        <TextArea />
      </Form.Item>
      <Form.Item label='Цена' name={names('price')} rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label='Тип кухни' name={names('typeId')} rules={[{ required: true }]}>
        <Select loading={menuType.pending}>{menuTypeItems}</Select>
      </Form.Item>
      <Form.Item label='Время приема пищи' name={names('timeId')} rules={[{ required: true }]}>
        <Select loading={menuTime.pending}>{menuTimeItems}</Select>
      </Form.Item>
      <Form.Item label='Вес' name={names('weight')} rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label='Фото' rules={[{ required: true }]}>
        <ImageCrop setImageBlob={setImageBlob} />
      </Form.Item>
    </>
  );
};
