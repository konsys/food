import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
import { TVoidFn } from '../../../types';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';

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
      <Button type={'primary'} onClick={() => setConfirmDelete(true)} icon={<DeleteOutlined />}>
        Удалить
      </Button>
    </Popconfirm>
  );
}
