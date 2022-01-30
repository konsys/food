import { Button, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { TVoidFn } from '../../../types';

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
      onConfirm={() => {
        onDelete(id);
        setConfirmDelete(false);
      }}
      onCancel={() => setConfirmDelete(false)}
    >
      {/* TODO add color */}
      <Button type={'link'} danger onClick={() => setConfirmDelete(true)} icon={<DeleteOutlined />}>
        Удалить
      </Button>
    </Popconfirm>
  );
}
