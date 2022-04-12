import { Button, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { TUuid, TVoidFn } from '../../../types';

interface Props {
  uuid: TUuid;
  onDelete: TVoidFn<TUuid>;
}

export function DeleteButton({ uuid, onDelete }: Props) {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  return (
    <Popconfirm
      title='Удалить?'
      visible={confirmDeleteVisible}
      onConfirm={() => {
        onDelete(uuid);
        setConfirmDeleteVisible(false);
      }}
      onCancel={() => setConfirmDeleteVisible(false)}
    >
      {/* TODO add color */}
      <Button
        type='link'
        danger
        onClick={() => setConfirmDeleteVisible(true)}
        icon={<DeleteOutlined />}
      />
    </Popconfirm>
  );
}
