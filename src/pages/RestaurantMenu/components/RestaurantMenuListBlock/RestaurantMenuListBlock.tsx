import React, { memo } from 'react';

import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import { grouppedByCategory } from '../../../../modules/restaurantMenu/utils';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';
import './restaurantMenuListBlock.less';

interface Props {
  menu: RestaurantMenuDto[];
}

function RestaurantMenuListBlock(props: Props) {
  const { menu } = props;
  const items = grouppedByCategory(menu, 'foodCategory.name');

  return (
    <>
      {items.map((v, index) => (
        <div key={index}>
          <div className='restaurant-menu__section-title'>
            <h2>{v.title}</h2>
          </div>
          <div className='restaurant-menu__service-list row'>
            {v.menu.map((item, index) => (
              <RestaurantMenuListItem item={item} key={index} />
            ))}
          </div>
          <div className='service-list' />
        </div>
      ))}
    </>
  );
}

export default memo(RestaurantMenuListBlock);
