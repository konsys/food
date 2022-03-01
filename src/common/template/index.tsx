import React, { ReactElement } from 'react';
import Content from './containers/Content/Content';
import Header from '../../pages/Header/Header';
import Footer from './containers/Footer/Footer';
import './index.less';
import './animation.less';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  return (
    <>
      <div className='page-wrapper'>
        <Header />
        <Content>{children}</Content>
      </div>
      <Footer />
    </>
  );
}
