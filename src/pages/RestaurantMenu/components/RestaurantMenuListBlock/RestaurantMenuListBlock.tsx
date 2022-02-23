import React, { memo } from 'react';
import { chain } from 'lodash';

import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';
import './restaurantMenuListBlock.less';

interface Props {
  menu: RestaurantMenuDto[];
}

function RestaurantMenuListBlock(props: Props) {
  const { menu } = props;

  const grouppedByCategory = chain(menu)
    .groupBy('foodCategory.name')
    // .orderBy()
    .map((value, key) => ({ title: key, menu: value }))
    .value();

  return (
    <>
      {grouppedByCategory.map((v) => (
        <>
          <div className='restaurant-menu__section-title'>
            <h2>{v.title}</h2>
          </div>
          <div className='restaurant-menu__service-list row'>
            {v.menu.map((item, index) => (
              <RestaurantMenuListItem item={item} key={index} />
            ))}
          </div>
          <div className='service-list' />
        </>
      ))}
    </>
  );
}

export default memo(RestaurantMenuListBlock);
