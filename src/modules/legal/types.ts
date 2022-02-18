import { DictionaryDto } from '../../core/dictionary/types';

export type LegalDto = {
  adress: string;
  inn: string;
  kpp?: string;
  ogrn?: string;
} & DictionaryDto;
