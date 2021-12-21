import React, { ReactElement } from "react";
import { Route } from "react-router-dom";
import { paths } from "./paths";
import { EPathName } from "./types";

export const getRoutes = () => {
  const routes: ReactElement<EPathName, string>[] = [];
  for (let k in paths) {
    const { element, path } = paths[k as EPathName];
    routes.push(
      <Route key={k} path={path} element={createComponent(element)} />
    );
  }
  return routes;
};

// TODO add type
function createComponent(WrappedComponent: any) {
  return <WrappedComponent />;
}
