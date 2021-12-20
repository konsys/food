import React, { ReactElement } from "react";
import { Route } from "react-router-dom";
import { paths } from "./paths";
import { EPath } from "./types";

export const getRoutes = () => {
  const routes: ReactElement<EPath, string>[] = [];
  for (let k in paths) {
    const { element, path } = paths[k as EPath];
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
