import { DictionaryDto } from '../../../core/dictionary/types';
export type ImageDto = {
  averageImg: string | null;
  largeImg: string | null;
  description: string | null;
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  mimetype: string;
  original: string;
  originalname: string;
  path: string;
  size: number;
  smallImg: string | null;
  visible: boolean;
} & DictionaryDto;
