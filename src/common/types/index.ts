export type TWithKey<T, Key = string> = T & { _key: Key };
export type TLoadById = (id: number | string) => void;
export type TVoidFn<T extends any = void> = (arg: T) => void;
export type TPromiseFn<T extends any = void, R = void> = (arg: T) => Promise<R>;
export type TOnlyView = { onlyView: boolean };

export type ImageDto = {
  averageImg: string | null;
  bigImg: string | null;
  createdAt: Date;
  description: string | null;
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  id: number;
  mimetype: string;
  name: string;
  original: string;
  originalname: string;
  path: string;
  size: number;
  smallImg: string | null;
  updatedAt: Date;
  visible: false;
};
