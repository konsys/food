import { createDomain, merge, sample } from "effector";
import { createGate } from "effector-react";

const RouteDomain = createDomain("RouteDomain");

export const RouteGate = createGate();

const routes$ = RouteDomain.createStore<string>("");

const changeRoute = RouteDomain.event();
const changeRoute1 = RouteDomain.event();

sample({
  clock: merge([RouteGate.open, changeRoute]),
  source: RouteGate.state,
  target: changeRoute1
});
