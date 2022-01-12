import React, { PropsWithChildren } from 'react';
import { ModalProps, Modal } from 'antd';

type Props = PropsWithChildren<ModalProps>;

export const MainModal = (props: Props) => {
  const { wrapProps, ...otherProps } = props;
  return (
    <>
      <Modal {...otherProps} />
    </>
  );
};

MainModal.confirm = Modal.confirm;
MainModal.info = Modal.info;
MainModal.success = Modal.success;
MainModal.error = Modal.error;
MainModal.warn = Modal.warn;
MainModal.warning = Modal.warning;
MainModal.destroyAll = Modal.destroyAll;
