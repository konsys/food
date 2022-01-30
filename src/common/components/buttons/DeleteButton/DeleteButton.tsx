import React from 'react';
import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
import { TVoidFn } from '../../../types';
import { DeleteOutlined } from '@ant-design/icons';

interface Props {
  id: number;
  onDelete: TVoidFn<number>;
}

export function DeleteButton({ id, onDelete }: Props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  return (
    <Popconfirm
      title={`Удалить?`}
      visible={confirmDelete}
      onConfirm={() => onDelete(id)}
      onCancel={() => setConfirmDelete(false)}
    >
      {/* TODO add color */}
      <Button type={'link'} danger onClick={() => setConfirmDelete(true)} icon={<DeleteOutlined />}>
        Удалить
      </Button>
    </Popconfirm>
  );
}
