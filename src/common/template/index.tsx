import React, { ReactElement } from 'react';
import { Header } from './Header/Header';
import './style.less';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  children;
  return (
    <div className='page-wrapper'>
      <Header />
    </div>
  );
}
