import { RouteProps } from "react-router";
import FoodMenu from "../pages/FoodMenu";
import { LoginPage } from "../pages/Login/LoginPage";
import NotFound from "../pages/NotFound";

export enum EPath {
  HOME = "HOME",
  MENU = "MENU",
  ABOUT = "ABOUT",
  CONTACTS = "CONTACTS",
  LOGIN = "LOGIN",
  NOT_FOUND = "NOT_FOUND"
}

export type TMenuNames = {
  path: string;
  name: string;
};

export const pathNames: Record<EPath, TMenuNames> = {
  MENU: { path: "/menu", name: "Меню" },
  ABOUT: { path: "/about", name: "О нас" },
  CONTACTS: { path: "/contacts", name: "Контакты" },
  LOGIN: { path: "/login", name: "Войти" },
  HOME: { path: "/", name: "Главная" },
  NOT_FOUND: { path: "/not_found", name: "Не найдено" }
};

export const paths: Record<EPath, RouteProps> = {
  HOME: {
    path: pathNames.HOME.path,
    exact: true,
    component: FoodMenu
  },
  ABOUT: {
    path: pathNames.ABOUT.path,
    exact: true,
    component: FoodMenu
  },
  MENU: {
    path: pathNames.MENU.path,
    exact: true,
    component: FoodMenu
  },
  CONTACTS: {
    path: pathNames.CONTACTS.path,
    exact: true,
    component: FoodMenu
  },
  LOGIN: {
    path: pathNames.LOGIN.path,
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
