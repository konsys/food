import pickBy from 'lodash/pickBy';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { v4 as uuidv4 } from 'uuid';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const isValidateErrorEntity = (e: any): e is ValidateErrorEntity => {
  try {
    return 'errorFields' in e && 'outOfDate' in e && 'values' in e;
  } catch (ignored) {
    return false;
  }
};

export const isNullOrUndefined = <T>(item: T | null | undefined): item is null | undefined =>
  item === undefined || item === null;

export const downloadBlob = (blob: Blob, fileNameWithExtension: string): void => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileNameWithExtension);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export function downloadJson(json: any, name: string) {
  const blob = new Blob([JSON.stringify(json)], {
    type: 'text/json;charset=utf-8',
  });
  downloadBlob(blob, `${name}.json`);
}

export function downloadText(text: string, name: string) {
  const blob = new Blob([text], {
    type: 'text/plain;charset=utf-8',
  });
  downloadBlob(blob, name);
}

export const noopFn = (): undefined => undefined;

export function instanceOf<T>(obj: any, check: (obj: T) => boolean): obj is T {
  return check(obj);
}

export const removeEntryFromRecord = (record: Record<string, any>, deleteKey: string | string[]) =>
  pickBy(record, (_, key) => {
    if (typeof deleteKey === 'string') {
      return key !== deleteKey;
    }
    return !deleteKey.includes(key);
  });

export const isObject = <T>(value: T) => typeof value === 'object' && value !== null;

export const getFileExtension = (filename: string) => filename.split('.').pop();

export const generateUuid = () => uuidv4();

export const isNumber = (item: any): item is number => !Number.isNaN(Number(item));

export const uuid = () => uuidv4();
