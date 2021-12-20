import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import { paths } from "./paths";
import { EPath } from "./types";

export default function Routes() {
  return <Switch>{getRoutes()}</Switch>;
}

const getRoutes = () => {
  const routes: ReactElement<EPath, string>[] = [];
  for (let k in paths) {
    routes.push(<Route key={k} {...paths[k as EPath]} />);
  }
  return routes;
};
