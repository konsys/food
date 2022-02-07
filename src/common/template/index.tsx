import React, { ReactElement } from 'react';
import Content from './containers/Content/Content';
import './containers/styles/common.less';
import './containers/styles/buttons.less';
import './containers/styles/style.less';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

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
