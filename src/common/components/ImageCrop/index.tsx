import { Button, Upload } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import { TVoidFn } from '../../types';
import './style.less';
import { UploadOutlined } from '@ant-design/icons';
import { IDragDropProps } from '../drag/DragDrop';
import { noop } from 'lodash';
import { apiUrls } from '../../api/urls';
import { Params } from '../../../config/params';
import { RcFile } from 'antd/lib/upload';
import { Nullable } from '../../../core/types';

export type TFile = (Blob & RcFile) | undefined;

type IState = {
  croppedImageUrl: Nullable<Blob>;
  src: string | ArrayBuffer | null;
  crop: Crop;
};

interface Props {
  setImageBlob: TVoidFn<Blob>;
  inImgSrc?: string;
}

export const ImageCrop = ({ setImageBlob, inImgSrc }: Props) => {
  const [state, setState] = useState<IState>({
    src: inImgSrc ?? null,
    croppedImageUrl: null,
    crop: {
      unit: '%',
      width: 30,
      height: 30,
      aspect: 16 / 9,
      x: 0,
      y: 0,
    },
  });

  useEffect(() => {
    inImgSrc && setState({ ...state, src: inImgSrc });
  }, [inImgSrc]);

  const imageRef = useRef<HTMLImageElement>();

  const onSelectFile = (file: TFile) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => setState({ ...state, src: reader.result }));
    file && reader.readAsDataURL(file);
  };

  const onImageLoaded = (image: HTMLImageElement) => {
    imageRef.current = image;
  };

  const onCropComplete = (c: Crop) => makeClientCrop(c);
  const onCropChange = (cropChange: Crop) => setState({ ...state, crop: cropChange });

  async function makeClientCrop(makeCrop: Crop) {
    if (imageRef.current && makeCrop.width && makeCrop.height) {
      await getCroppedImg(imageRef.current, makeCrop);
    }
  }

  const getCroppedImg = (image: HTMLImageElement, getCrop: Crop): Promise<void> => {
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = getCrop.width * pixelRatio * scaleX;
    canvas.height = getCrop.height * pixelRatio * scaleY;

    if (ctx) {
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(
        image,
        getCrop.x * scaleX,
        getCrop.y * scaleY,
        getCrop.width * scaleX,
        getCrop.height * scaleY,
        0,
        0,
        getCrop.width * scaleX,
        getCrop.height * scaleY
      );
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob: Blob | null) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
          } else {
            setImageBlob(blob);

            resolve();
          }
        },
        'image/jpeg',
        1
      );
    });
  };

  const { crop, src } = state;

  console.log(1111111111, src);

  const props: IDragDropProps = {
    name: 'file',
    multiple: false,
    action: `${Params.BASE_URL}${apiUrls.img.start}`,

    onChange(info) {
      onSelectFile(info.file.originFileObj);
    },
    onDrop() {
      noop();
    },
  };

  return (
    <>
      <div>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      {src && (
        <ReactCrop
          src={`${Params.BASE_URL}/${src.toString()}`}
          crop={crop}
          ruleOfThirds
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
        />
      )}
    </>
  );
};
