import React, { ReactNode } from 'react';
import { Select } from 'antd';
import { TId, TVoidFn } from '../types';

const { Option } = Select;
export const createOptionsList = <D extends { id: TId; name: string }>(
  items: D[],
  cb: TVoidFn<ReactNode[]>
) => {
  const options = items.map((v) => (
    <Option key={v.id?.toString()} value={v.id}>
      {v.name}
    </Option>
  ));

  cb(options);
};
