import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import { RestaurantModel } from '../../store';
import RestaurantsList from './containters/RestaurantsList/RestaurantsList';

const { $listStore, ListGate } = RestaurantModel;

function Restaurant() {
  const { items } = useStore($listStore);
  useGate(ListGate);
  return <RestaurantsList items={items} />;
}

export default memo(Restaurant);
