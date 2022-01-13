import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Nullable } from '../../../core/types';

const fileTypes = ['JPG', 'PNG', 'GIF'];

type TFile = Nullable<string | Blob>;
export const DragDrop = () => {
  const [file, setFile] = useState<TFile>(null);

  console.log(111111111111, file);
  const handleChange = (f: TFile) => {
    setFile(f);
  };
  return <FileUploader handleChange={handleChange} name='file' types={fileTypes} />;
};
