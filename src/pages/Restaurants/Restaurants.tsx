import { Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo } from 'react';
import {
  restaurantBreabcrums,
  useBreadcrumbs,
} from '../../modules/breadcrumbs/useBreadcrumbs';
import { RestaurantModel } from '../../store';
import RestaurantsList from './containters/RestaurantsList/RestaurantsList';

const { $listStore, ListGate } = RestaurantModel;

function Restaurant() {
  const { items, pending } = useStore($listStore);
  useGate(ListGate);

  useBreadcrumbs([restaurantBreabcrums]);

  return (
    <Spin spinning={pending}>
      <RestaurantsList items={items} />
    </Spin>
  );
}

export default memo(Restaurant);
