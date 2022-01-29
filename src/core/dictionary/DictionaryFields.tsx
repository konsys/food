import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import TextArea from 'antd/lib/input/TextArea';
import { DictionaryDto } from './types';

const names = columnsNamesGenerator<DictionaryDto>();

interface Props<T> {
  // TODO add type
  formInstance: any;
  item?: T;
}

export function DictionaryFields({ item, formInstance }: Props<DictionaryDto>) {
  useEffect(() => {
    formInstance.setFieldsValue(item);
  }, [item]);

  return (
    <>
      <Form.Item label='Название' name={names('name')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label='Описание' name={names('description')} rules={[{ required: true }]}>
        <TextArea />
      </Form.Item>
      <Form.Item name={names('id')} hidden>
        <Input />
      </Form.Item>
    </>
  );
}
