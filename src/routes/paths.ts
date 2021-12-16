import { RouteProps } from "react-router";
import FoodMenu from "../pages/FoodMenu";
import { LoginPage } from "../pages/Login/LoginPage";
import NotFound from "../pages/NotFound";
export enum EPath {
  FOOD_MENU = "FOOD_MENU",
  LOGIN = "LOGIN",
  NOT_FOUND = "NOT_FOUND"
}

export const paths: Record<EPath, RouteProps> = {
  FOOD_MENU: {
    path: "/",
    exact: true,
    component: FoodMenu
  },

  LOGIN: {
    path: "/login",
    exact: true,
    component: LoginPage
  },

  NOT_FOUND: {
    path: "*",
    exact: false,
    component: NotFound
  }
};

export const getRouteConfig = (id: EPath): RouteProps => paths[id];
