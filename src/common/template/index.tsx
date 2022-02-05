import React, { ReactElement } from 'react';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import './style.less';
import './common.less';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  children;
  return (
    <>
      <div className='page-wrapper'>
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
}
