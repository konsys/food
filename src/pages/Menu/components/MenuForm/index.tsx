import React, { useEffect, useState } from 'react';
import { Form, Input, message, Select } from 'antd';
import { columnsNamesGenerator } from '../../../../common/form/columnsNamesGenerator';
import TextArea from 'antd/lib/input/TextArea';
import { MenuDto } from '../../model/types';
import { DragDrop, IDragDropProps } from '../../../../common/components/drag/DragDrop';
import { Nullable } from '../../../../core/types';
import { Params } from '../../../../config/params';
import { useStore } from 'effector-react';
import { MenuTimeModel, MenuTypeModel } from '../../../../store';
import { ImageDto } from '../../../Image/model/types';
import { createListOptions } from '../../../../common/utils/selectUtils';
import { noop } from 'lodash';
import { TVoidFn } from '../../../../common/types';

const { $listStore: $menuTimeList, getAllFx: getAllMenuTimeFx } = MenuTimeModel;
const { $listStore: $menuTypeList, getAllFx: getAllMenuTypeFx } = MenuTypeModel;

const names = columnsNamesGenerator<MenuDto>();

interface Props {
  modalVisible: boolean;
  // TODO add type
  formInstance: any;
  uploadImagePath: Nullable<string>;
  setUploadImagePath: TVoidFn<string>;
}

export const MenuForm = ({
  modalVisible,
  formInstance,
  uploadImagePath,
  setUploadImagePath,
}: Props) => {
  const menuTime = useStore($menuTimeList);
  const menuType = useStore($menuTypeList);

  const [menuTimeItems, setMenuTimeItems] = useState<JSX.Element[]>();
  const [menuTypeItems, setMenuTypeItems] = useState<JSX.Element[]>();

  const onFileImage = ({ id, smallImg }: ImageDto) => {
    formInstance.setField({ name: 'imgId', value: id });
    setUploadImagePath(`${Params.BASE_URL}/${smallImg}`);
  };

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
    </>
  );
};
