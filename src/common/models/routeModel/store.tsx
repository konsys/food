import { createDomain, sample } from 'effector';
import { createGate } from 'effector-react';

const RouteDomain = createDomain('RouteDomain');

const RouteGate = createGate();

const changeRoute = RouteDomain.event();
const changeRoute1 = RouteDomain.event();

sample({
  clock: [RouteGate.open, changeRoute],
  source: RouteGate.state,
  target: changeRoute1,
});
