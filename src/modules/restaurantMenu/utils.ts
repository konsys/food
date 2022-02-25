import { chain } from 'lodash';
import { RestaurantMenuDto } from './types';

export const grouppedByCategory = (items: RestaurantMenuDto[], key: string) =>
  chain(items)
    .groupBy(key)
    .map((value, key) => ({ title: key, menu: value }))
    .value();
