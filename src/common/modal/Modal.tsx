import React, { PropsWithChildren } from 'react';
import { ModalProps, Modal } from 'antd';

type Props = PropsWithChildren<ModalProps>;

export function MainModal(props: Props) {
  return (
    <Modal {...props} />
  );
}

MainModal.confirm = Modal.confirm;
MainModal.info = Modal.info;
MainModal.success = Modal.success;
MainModal.error = Modal.error;
MainModal.warn = Modal.warn;
MainModal.warning = Modal.warning;
MainModal.destroyAll = Modal.destroyAll;
