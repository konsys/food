import { ReactElement } from "react";
import { Route } from "react-router-dom";
import FoodMenu from "../pages/FoodMenu";
import { paths } from "./paths";
import { EPath } from "./types";

// export function AppRoutes() {
//   return <>{getRoutes()}</>;
// }

export const getRoutes = () => {
  const routes: ReactElement<EPath, string>[] = [];
  for (let k in paths) {
    console.log(2222222222, paths[k as EPath]);
    routes.push(
      <Route key={k} {...paths[k as EPath]} element={<FoodMenu />} />
    );
  }
  return routes;
};
