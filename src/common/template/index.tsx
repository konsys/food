import React, { ReactElement } from 'react';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import './styles/common.less';
import './styles/buttons.less';
import './styles/style.less';

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
