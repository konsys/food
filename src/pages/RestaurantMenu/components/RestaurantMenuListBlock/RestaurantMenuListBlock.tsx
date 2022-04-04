import React, { memo } from 'react';
import { TRestaurantMenuOrder } from '../../../../modules/cart/types';
import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import { grouppedByCategory } from '../../../../modules/restaurantMenu/utils';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';
import './restaurantMenuListBlock.less';

interface Props {
  menu: RestaurantMenuDto[];
  addToCart: (item: RestaurantMenuDto) => void;
  cartOrder?: TRestaurantMenuOrder[];
}

function RestaurantMenuListBlock(props: Props) {
  const { menu, addToCart, cartOrder } = props;
  const items = grouppedByCategory(menu, 'foodCategory.name');

  return (
    <>
      {items.map((v, index) => (
        <div key={index}>
          <div className="restaurant-menu__section-title">
            <h2>{v.title}</h2>
          </div>
          <div className="restaurant-menu__service-list row">
            {v.menu.map((item) => (
              <RestaurantMenuListItem
                item={item}
                key={item.uuid}
                addToCart={addToCart}
                cartOrder={cartOrder}
              />
            ))}
          </div>
          <div className="service-list" />
        </div>
      ))}
    </>
  );
}
// 262

export default memo(RestaurantMenuListBlock);
