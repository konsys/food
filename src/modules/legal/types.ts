import { DictionaryDto } from '../../core/dictionary/types';

export type LegalDto = {
  address: string;
  inn: string;
  kpp?: string;
  ogrn?: string;
} & DictionaryDto;
