import React, { memo } from 'react';
import { TUuid } from '../../../../common/types';
import { uuid } from '../../../../common/utils/utils';
import { getClientUuid } from '../../../../modules/cart/service';
import { CartDto, EOrderStatus } from '../../../../modules/cart/types';

import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import { grouppedByCategory } from '../../../../modules/restaurantMenu/utils';
import { CartModel } from '../../../../store';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';
import './restaurantMenuListBlock.less';

interface Props {
  menu: RestaurantMenuDto[];
}
const { createItemFx } = CartModel;

function RestaurantMenuListBlock(props: Props) {
  const { menu } = props;
  const items = grouppedByCategory(menu, 'foodCategory.name');

  const addToCart = (restaurantMenuUuid: TUuid) => {
    const cartOrder: CartDto = {
      clientUuid: getClientUuid(),
      description: '',
      id: null,
      status: EOrderStatus.IN_PROGRESS,
      uuid: uuid(),
      order: {
        quantity: 1,
        restaurantMenuUuid,
      },
    };
    createItemFx(cartOrder);
  };
  return (
    <>
      {items.map((v, index) => (
        <div key={index}>
          <div className='restaurant-menu__section-title'>
            <h2>{v.title}</h2>
          </div>
          <div className='restaurant-menu__service-list row'>
            {v.menu.map((item) => (
              <RestaurantMenuListItem item={item} key={item.uuid} addToCart={addToCart} />
            ))}
          </div>
          <div className='service-list' />
        </div>
      ))}
    </>
  );
}

export default memo(RestaurantMenuListBlock);
