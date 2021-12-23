import { useStore } from 'effector-react';
import React, { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPath } from '../../routes/paths';
import { Footer } from './Footer';
import { Header } from './Header';
import { $route, setCurrentPath } from './model/store';
import { ScrollButton } from './ScrollButton';
import { SpecialHeader } from './SpecialHeader';

interface Props {
  children: ReactElement;
}

export const Template = ({ children }: Props) => {
  const { pathname } = useLocation();
  const path = getRouteByPath(pathname);
  useEffect(() => {
    path && setCurrentPath(path);
  }, [path]);

  const store = useStore($route);
  return (
    <>
      <Header />
      <SpecialHeader specialHeaderTitle={store.name} />
      {children}
      <Footer />
      <ScrollButton />
    </>
  );
};
