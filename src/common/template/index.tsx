import React, { ReactElement } from 'react';
import { Header } from './Header';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  children;
  return <Header />;
}
