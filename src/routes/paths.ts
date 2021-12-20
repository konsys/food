import { RouteProps } from "react-router-dom";
import { About } from "../pages/About";
import { Contacts } from "../pages/Contacts";
import FoodMenu from "../pages/FoodMenu";
import { LoginPage } from "../pages/Login/LoginPage";
import NotFound from "../pages/NotFound";
import { EPath, TMenuNames } from "./types";

export const pathNames: Record<EPath, TMenuNames> = {
  FOOD_MENU: { path: "/food-menu", name: "Меню" },
  ABOUT: { path: "/about", name: "О нас" },
  CONTACTS: { path: "/contacts", name: "Контакты" },
  LOGIN: { path: "/login", name: "Войти" },
  HOME: { path: "/", name: "Главная" },
  NOT_FOUND: { path: "/not_found", name: "Не найдено" }
};

const { HOME, ABOUT, CONTACTS, LOGIN, FOOD_MENU } = pathNames;

export const paths: Record<EPath, RouteProps> = {
  HOME: {
    path: HOME.path,
    exact: true,
    component: FoodMenu
  },
  ABOUT: {
    path: ABOUT.path,
    exact: true,
    component: About
  },
  FOOD_MENU: {
    path: FOOD_MENU.path,
    exact: true,
    component: FoodMenu
  },
  CONTACTS: {
    path: CONTACTS.path,
    exact: true,
    component: Contacts
  },
  LOGIN: {
    path: LOGIN.path,
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
