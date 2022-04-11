import { Spin } from 'antd';
import { useGate, useStore } from 'effector-react';
import React, { memo, useEffect } from 'react';
import { updateBreadcrumbsStore } from '../../modules/breadcrumbs/model';
import { RestaurantModel } from '../../store';
import RestaurantsList from './containters/RestaurantsList/RestaurantsList';

const { $listStore, ListGate } = RestaurantModel;

function Restaurant() {
  const { items, pending } = useStore($listStore);
  useGate(ListGate);

  useEffect(() => {
    updateBreadcrumbsStore([
      {
        path: '/',
        title: 'Главная',
      },
      {
        path: '/restaurants',
        title: 'Рестораны',
      },
    ]);
  });
  return (
    <Spin spinning={pending}>
      <RestaurantsList items={items} />
    </Spin>
  );
}

export default memo(Restaurant);
