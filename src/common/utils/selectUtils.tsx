import React from 'react';
import { Select } from 'antd';
import { TSelectOptions } from '../types';

const { Option } = Select;

export const createOptionsList = (items: TSelectOptions) =>
  items.map((v) => (
    <Option key={v.id?.toString()} value={v.id}>
      {v.value}
    </Option>
  ));
