import React, { DragEvent } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/lib/upload/Dragger';
import { TVoidFn } from '../../types';
import { UploadChangeParam } from 'antd/lib/upload';
export interface IDragDropProps {
  name: string;
  multiple: true;
  action: string;
  onChange: TVoidFn<UploadChangeParam>;
  onDrop: TVoidFn<DragEvent<HTMLDivElement>>;
}

export const DragDrop = (props: IDragDropProps) => {
  return (
    <>
      <Dragger {...props}>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>Click or drag file to this area to upload</p>
        <p className='ant-upload-hint'>
          Support for a single or bulk upload. Strictly prohibit from uploading company data or
          other band files
        </p>
      </Dragger>
    </>
  );
};
