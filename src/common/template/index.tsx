import React, { ReactElement } from 'react';
import Content from './components/Content/Content';
import Header from '../../pages/Header/Header';
import Footer from './components/Footer/Footer';
import './index.less';
import './animation.less';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Content>{children}</Content>
      </div>
      <Footer />
    </>
  );
}
