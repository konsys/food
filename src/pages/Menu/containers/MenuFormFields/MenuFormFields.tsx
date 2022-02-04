import React, { ReactNode, useEffect, useState } from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useGate, useStore } from 'effector-react';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import { MenuDto } from '../../model/types';
import { MenuTimeModel, MenuTypeModel } from '../../../../store';
import { createOptionsList } from '../../../../common/utils/selectUtils';
import { ImageCrop } from '../../../../common/components/ImageCrop';
import { setImageBlob } from '../../../../modules/Image/model/store';

const { $listStore: $menuTimeList, ListGate: TimeGate } = MenuTimeModel;
const { $listStore: $menuTypeList, ListGate: TypeGate } = MenuTypeModel;

const names = columnsNamesGenerator<MenuDto>();

interface Props {
  // TODO add type
  formInstance: any;
}

export function MenuFormFields({ formInstance }: Props) {
  const menuTimeList = useStore($menuTimeList);
  const menuTypeList = useStore($menuTypeList);

  const [menuTimeItems, setMenuTimeItems] = useState<ReactNode[]>();
  const [menuTypeItems, setMenuTypeItems] = useState<ReactNode[]>();

  useEffect(() => {
    createOptionsList(menuTimeList.items, setMenuTimeItems);
  }, [menuTimeList.items]);

  useEffect(() => {
    createOptionsList(menuTypeList.items, setMenuTypeItems);
  }, [menuTypeList.items]);

  useGate(TimeGate);
  useGate(TypeGate);

  const inImgSrc = formInstance.getFieldValue('image')?.largeImg;
  return (
    <>
      <Form.Item
        label='Название'
        name={names('name')}
        rules={[{ required: true, message: 'Не заполнено название' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label='Описание' name={names('description')}>
        <TextArea />
      </Form.Item>
      <Form.Item
        label='Цена'
        name={names('price')}
        rules={[{ required: true, message: 'Не заполнена цена' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label='Тип кухни'
        name={names('typeId')}
        rules={[{ required: true, message: 'Не заполнено название' }]}
      >
        <Select loading={menuTypeList.pending}>{menuTypeItems}</Select>
      </Form.Item>
      <Form.Item
        label='Время приема пищи'
        name={names('timeId')}
        rules={[{ required: true, message: 'Не заполнено поле' }]}
      >
        <Select loading={menuTimeList.pending}>{menuTimeItems}</Select>
      </Form.Item>
      <Form.Item
        label='Вес'
        name={names('weight')}
        rules={[{ required: true, message: 'Не заполнено поле' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item label='Фото'>
        <ImageCrop setImageBlob={setImageBlob} inImgSrc={inImgSrc} />
      </Form.Item>
      <Form.Item name={names('imgId')} hidden>
        <Input />
      </Form.Item>
      <Form.Item name={names('id')} hidden>
        <Input />
      </Form.Item>
    </>
  );
}
