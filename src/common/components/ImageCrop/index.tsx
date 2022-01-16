import React, { ReactNode, useRef, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import { TVoidFn } from '../../types';
import './style.less';

type IState = {
  croppedImageUrl: string;
  src: string | ArrayBuffer | null;
  crop: Crop;
};

interface Props {
  setImageUrl: TVoidFn<string>;
}

export const ImageCrop = ({ setImageUrl }: Props) => {
  const [state, setState] = useState<IState>({
    src: null,
    croppedImageUrl: '',
    crop: {
      unit: '%',
      width: 30,
      height: 30,
      aspect: 16 / 9,
      x: 0,
      y: 0,
    },
  });

  const imageRef = useRef<HTMLImageElement>();

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setState({ ...state, src: reader.result }));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  const onImageLoaded = (image: HTMLImageElement) => {
    imageRef.current = image;
  };

  const onCropComplete = (c: Crop) => makeClientCrop(c);
  const onCropChange = (crop: Crop) => setState({ ...state, crop });

  async function makeClientCrop(crop: Crop) {
    if (imageRef.current && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(imageRef.current, crop);
      setState({ ...state, croppedImageUrl });
    }
  }

  const getCroppedImg = (image: HTMLImageElement, crop: Crop): Promise<string> => {
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    if (ctx) {
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      );
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob: Blob | null) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
          } else {
            window.URL.revokeObjectURL(blob.arrayBuffer.toString());
            const imgUrl = window.URL.createObjectURL(blob);
            setImageUrl(imgUrl);
            resolve(imgUrl);
          }
        },
        'image/jpeg',
        1
      );
    });
  };

  const { crop, croppedImageUrl, src } = state;

  return (
    <>
      <div>
        <input type='file' accept='image/*' onChange={onSelectFile} />
      </div>
      {src && (
        <ReactCrop
          src={src.toString()}
          crop={crop}
          ruleOfThirds
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
        />
      )}
      {croppedImageUrl && <img alt='Crop' style={{ maxWidth: '100%' }} src={croppedImageUrl} />}
    </>
  );
};
