import { Modal } from 'antd';
import * as React from 'react';
import { TVoidFn } from '../../../../../common/types';

export interface ICreateMenuItemModalProps {
  isModalVisible: boolean;
  onOk: TVoidFn<void>;
  onCancel: TVoidFn<void>;
  title: string;
  children: React.ReactNode;
}

export const CreateMenuItemModal = ({
  isModalVisible,
  onCancel,
  onOk,
  children,
  title,
}: ICreateMenuItemModalProps) => {
  return (
    <>
      <Modal title={title} visible={isModalVisible} onOk={() => onOk()} onCancel={() => onCancel()}>
        {children}
      </Modal>
    </>
  );
};
