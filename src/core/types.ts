import { ReactNode } from 'react';

export type TChildren = {
  children?: ReactNode;
};

export type Nullable<T> = T | null;

export type NullableNumber = number | null;
export type NullableString = number | string;
