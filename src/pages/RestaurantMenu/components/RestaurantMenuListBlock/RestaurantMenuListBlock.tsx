import { useStore } from 'effector-react';
import React, { memo } from 'react';
import { TUuid } from '../../../../common/types';
import { addToCart } from '../../../../modules/cart/utils';

import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import { grouppedByCategory } from '../../../../modules/restaurantMenu/utils';
import { CartModel } from '../../../../store';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';
import './restaurantMenuListBlock.less';

interface Props {
  menu: RestaurantMenuDto[];
}
const { $itemStore } = CartModel;

function RestaurantMenuListBlock(props: Props) {
  const { menu } = props;
  const items = grouppedByCategory(menu, 'foodCategory.name');

  const { item } = useStore($itemStore);

  const addMenuToCart = (itemUuid: TUuid) => addToCart(item, itemUuid);

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

export default memo(RestaurantMenuListBlock);
