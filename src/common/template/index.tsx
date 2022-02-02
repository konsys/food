import React, { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPath } from '../../routes/paths';
import { Header } from './Header';
import { setCurrentPath } from './model/store';
import './common.less';

interface Props {
  children: ReactElement;
}

export function Template({ children }: Props) {
  const { pathname } = useLocation();
  const path = getRouteByPath(pathname);
  useEffect(() => {
    path && setCurrentPath(path);
  }, [path]);
  children;
  return (
    <>
      <Header />
      {/* {children}
      <Footer />
      <ScrollButton /> */}
    </>
  );
}
