import { Button, Upload } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import { RcFile } from 'antd/lib/upload';
import { UploadOutlined } from '@ant-design/icons';
import { noop } from 'lodash';
import { TVoidFn } from '../../types';
import { IDragDropProps } from '../drag/DragDrop';
import { apiUrls } from '../../api/urls';
import { Params } from '../../../config/params';
import { Nullable } from '../../../core/types';
import './style.less';

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

export function ImageCrop({ setImageBlob, inImgSrc }: Props) {
  const [state, setState] = useState<IState>({
    src: null,
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
    inImgSrc && setState({ ...state, crop: { ...crop, width: 100, height: 100 } });
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
        <Upload {...props} multiple={false}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>

      {(src || inImgSrc) && (
        <ReactCrop
          src={src ? src.toString() : `${Params.BASE_URL}/${inImgSrc}`}
          crop={crop}
          // ruleOfThirds
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
        />
      )}
    </>
  );
}
