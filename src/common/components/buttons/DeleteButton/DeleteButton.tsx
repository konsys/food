import { Button, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { TVoidFn } from '../../../types';

interface Props {
  id: number;
  onDelete: TVoidFn<number>;
}

export function DeleteButton({ id, onDelete }: Props) {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  return (
    <Popconfirm
      title={`Удалить?`}
      visible={confirmDeleteVisible}
      onConfirm={() => {
        onDelete(id);
        setConfirmDeleteVisible(false);
      }}
      onCancel={() => setConfirmDeleteVisible(false)}
    >
      {/* TODO add color */}
      <Button
        type={'link'}
        danger
        onClick={() => setConfirmDeleteVisible(true)}
        icon={<DeleteOutlined />}
      />
    </Popconfirm>
  );
}
