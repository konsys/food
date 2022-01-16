import React, { useRef, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import './style.less';

type IState = {
  croppedImageUrl: any;
  src: string | ArrayBuffer | null;
  crop: Crop;
};

export const ImageCrop = () => {
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

  const imageRef = useRef(null);

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setState({ ...state, src: reader.result }));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  const onImageLoaded = (image: any) => {
    imageRef.current = image;
  };

  const onCropComplete = (crop: Crop) => {
    makeClientCrop(crop);
  };

  const onCropChange = (crop: Crop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    setState({ ...state, crop });
  };

  async function makeClientCrop(crop: Crop) {
    if (imageRef.current && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(imageRef.current, crop, 'newFile.jpeg');
      setState({ ...state, croppedImageUrl });
    }
  }

  const getCroppedImg = (image: any, crop: Crop, fileName: string) => {
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
        (blob: any) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
          } else {
            // blob.name = fileName;
            window.URL.revokeObjectURL(blob.arrayBuffer.toString());
            resolve({ ...blob, name: fileName, fileUrl: window.URL.createObjectURL(blob) });
          }
        },
        'image/jpeg',
        1
      );
    });
  };

  const { crop, croppedImageUrl, src } = state;

  console.log(111111111111, croppedImageUrl);
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
