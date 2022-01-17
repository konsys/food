import React, { DragEvent } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/lib/upload/Dragger';
import { TVoidFn } from '../../types';
import { RcFile, UploadChangeParam } from 'antd/lib/upload';

export type BeforeUploadValueType = void | boolean | string | Blob | File;

export interface IDragDropProps {
  name: string;
  multiple: boolean;
  action: string;
  onChange: TVoidFn<UploadChangeParam>;
  onDrop: TVoidFn<DragEvent<HTMLDivElement>>;
  beforeUpload?: (
    file: RcFile,
    FileList: RcFile[]
  ) => BeforeUploadValueType | Promise<BeforeUploadValueType>;
}

// const props: IDragDropProps = {
//   name: 'file',
//   multiple: false,
//   action: `${Params.BASE_URL}/upload`,

//   onChange(info) {
//     const { status, response } = info.file;

//     if (status === 'done' && response) {
//       onFileImage(response);
//       message.success(`${info.file.name}. Успешно загружено.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name}. Ошибка загрузки.`);
//     }
//   },
//   onDrop(v) {
//     noop();
//   },
// };

// const onFileImage = ({ id, smallImg }: ImageDto) => {
//   formInstance.setField({ name: 'imgId', value: id });
//   setUploadImagePath(`${Params.BASE_URL}/${smallImg}`);
// };

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
