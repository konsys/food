import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import { paths } from './paths';
import { EPathName } from './types';

export const getRoutes = (): ReactElement<EPathName, string>[] => {
  const routes: ReactElement<EPathName, string>[] = [];
  for (const k in paths) {
    const { element, path } = paths[k as EPathName];
    routes.push(<Route key={k} path={path} element={createComponent(element)} />);
  }
  return routes;
};

function createComponent(WrappedComponent: any) {
  return <WrappedComponent />;
}
