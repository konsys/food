import { Modal } from 'antd';
import React, { memo } from 'react';
import { TPromiseFn, TVoidFn } from '../../types';

interface Props {
  title: string;
  text: string;
  onOk: TPromiseFn;
  setIsModalVisible: TVoidFn<boolean>;
  isModalVisible: boolean;
  onCancel?: TVoidFn;
  loading?: boolean;
}

function StandardModal(props: Props) {
  const {
    title,
    text,
    onOk,
    setIsModalVisible,
    isModalVisible,
    onCancel,
    loading,
  } = props;

  const handleOk = () => {
    onOk().then(() => setIsModalVisible(false));
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={loading}
    >
      <p>{text}</p>
    </Modal>
  );
}

export default memo(StandardModal);
