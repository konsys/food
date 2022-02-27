import React, { memo } from 'react';
import { TItemWithUuid, TVoidFn } from '../../../../common/types';
import { Nullable } from '../../../../core/types';
import { CartDto } from '../../../../modules/cart/types';

import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import { grouppedByCategory } from '../../../../modules/restaurantMenu/utils';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';
import './restaurantMenuListBlock.less';

interface Props {
  menu: RestaurantMenuDto[];
  addMenuToCart: TVoidFn<RestaurantMenuDto>;
  cartOrder: Nullable<TItemWithUuid<CartDto>>;
}

function RestaurantMenuListBlock(props: Props) {
  const { menu, addMenuToCart, cartOrder } = props;
  const items = grouppedByCategory(menu, 'foodCategory.name');

  return (
    <>
      {items.map((v, index) => (
        <div key={index}>
          <div className='restaurant-menu__section-title'>
            <h2>{v.title}</h2>
          </div>
          <div className='restaurant-menu__service-list row'>
            {v.menu.map((item) => (
              <RestaurantMenuListItem item={item} key={item.uuid} addToCart={addMenuToCart} />
            ))}
          </div>
          <div className='service-list' />
        </div>
      ))}
    </>
  );
}
// 262

export default memo(RestaurantMenuListBlock);
