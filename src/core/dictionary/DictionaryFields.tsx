import React from 'react';
import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { columnsNamesGenerator } from '../../common/form/columnsNamesGenerator';
import { DictionaryDto } from './types';

const names = columnsNamesGenerator<DictionaryDto>();

export function DictionaryFields() {
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
