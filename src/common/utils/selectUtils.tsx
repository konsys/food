import React from 'react';
import { Select } from 'antd';
import { TVoidFn } from '../types';

const { Option } = Select;
export const createOptionsList = <D extends { id?: number; name: string }>(
  items: D[],
  cb: TVoidFn<JSX.Element[]>
) => {
  const options = items.map((v) => (
    <Option key={v.id?.toString()} value={v.id}>
      {v.name}
    </Option>
  ));

  cb(options);
};
