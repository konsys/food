import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import TextArea from 'antd/lib/input/TextArea';
import { MenuDto } from '../../model/types';
import { Nullable } from '../../../../core/types';
import { useStore } from 'effector-react';
import { MenuModel, MenuTimeModel, MenuTypeModel } from '../../../../store';
import { createListOptions } from '../../../../common/utils/selectUtils';
import { ImageCrop } from '../../../../common/components/ImageCrop';
import { isNullOrUndefined } from '../../../../common/utils/utils';
import { setImageBlob } from '../../../Image/model/store';

const { $listStore: $menuTimeList, getAllFx: getAllMenuTimeFx } = MenuTimeModel;
const { $listStore: $menuTypeList, getAllFx: getAllMenuTypeFx } = MenuTypeModel;
const { $oneStore: $menuStore, getOneFx, resetOne } = MenuModel;

const names = columnsNamesGenerator<MenuDto>();

interface Props {
  modalVisible: boolean;
  // TODO add type
  formInstance: any;
  id: Nullable<number>;
}

export const MenuFormFields = ({ modalVisible, id, formInstance }: Props) => {
  const menuTimeList = useStore($menuTimeList);
  const menuTypeList = useStore($menuTypeList);
  const menu = useStore($menuStore);

  const [menuTimeItems, setMenuTimeItems] = useState<JSX.Element[]>();
  const [menuTypeItems, setMenuTypeItems] = useState<JSX.Element[]>();

  useEffect(() => {
    if (!isNullOrUndefined(id)) {
      getOneFx(id);
    }
    return () => resetOne();
  }, [id]);

  useEffect(() => {
    formInstance.setFieldsValue(menu.item);
  }, [menu.item]);

  useEffect(() => {
    createListOptions(menuTimeList.items, setMenuTimeItems);
  }, [menuTimeList.items]);

  useEffect(() => {
    createListOptions(menuTypeList.items, setMenuTypeItems);
  }, [menuTypeList.items]);

  useEffect(() => {
    if (modalVisible) {
      getAllMenuTypeFx({ limit: 20, page: 1 });
      getAllMenuTimeFx({ limit: 20, page: 1 });
    }
  }, [modalVisible]);

  const inImgSrc = formInstance.getFieldValue('image')?.largeImg;
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
        <Select loading={menuTypeList.pending}>{menuTypeItems}</Select>
      </Form.Item>
      <Form.Item label='Время приема пищи' name={names('timeId')} rules={[{ required: true }]}>
        <Select loading={menuTimeList.pending}>{menuTimeItems}</Select>
      </Form.Item>
      <Form.Item label='Вес' name={names('weight')} rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label='Фото' rules={[{ required: true }]}>
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
};
