import { RouteProps } from "react-router";
import Cube from "../pages/Cube";
import FoodMenu from "../pages/FoodMenu";
import { LoginPage } from "../pages/Login/LoginPage";
import NotFound from "../pages/NotFound";
import TestCompomemt from "../pages/TestComponent";
import WordCube from "../pages/WordCube";

export enum EPath {
  FOOD_MENU = "FOOD_MENU",
  TEST_PATH = "TEST_PATH",
  DICES = "DICES",
  LOGIN = "LOGIN",
  WORD_CUBE = "WORD_CUBE",
  NOT_FOUND = "NOT_FOUND"
}

export const paths: Record<EPath, RouteProps> = {
  FOOD_MENU: {
    path: "/",
    exact: true,
    component: FoodMenu
  },
  WORD_CUBE: {
    path: "/cube",
    exact: true,
    component: WordCube
  },
  DICES: {
    path: "/dices",
    exact: true,
    component: Cube
  },
  TEST_PATH: {
    path: "/t",
    exact: true,
    component: TestCompomemt
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
