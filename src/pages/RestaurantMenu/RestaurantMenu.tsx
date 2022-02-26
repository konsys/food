import React, { memo } from 'react';
import { useGate, useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import RestaurantMenuListBlock from './components/RestaurantMenuListBlock/RestaurantMenuListBlock';
import RestaurantMenuBottomLinks from './RestaurantMenuBottomLinks/RestaurantMenuBottomLinks';
import RestaurantMenuBottomPartnerInfo from './components/RestaurantMenuBottomPartnerInfo/RestaurantMenuBottomPartnerInfo';
import Cart from '../Cart/Cart';
import RestaurantMenuHeader from './components/RestaurantMenuHeader/RestaurantMenuHeader';
import './restaurantMenu.less';
import { CartModel, RestaurantModel } from '../../store';
import { grouppedByCategory } from '../../modules/restaurantMenu/utils';
import RestaurantMenuTopNavigation from './components/RestaurantMenuTopNavigation/RestaurantMenuTopNavigation';
import { TLinkWithText } from '../../common/types/utilTypes';
import { getClientUuid } from '../../modules/cart/service';

const { $itemStore, ItemGate } = RestaurantModel;
const { ItemGate: CartGate, $itemStore: cartStore } = CartModel;

function RestaurantMenu() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);
  useGate(CartGate, getClientUuid());

  const { item: cartOrder } = useStore(cartStore);
  const { item } = useStore($itemStore);

  const items: TLinkWithText[] = item
    ? grouppedByCategory(item?.restaurantMenu, 'foodCategory.name').map((v) => ({
        link: v.title,
        text: v.title,
      }))
    : [];
  return (
    <div>
      {item ? (
        <div className='container'>
          <div className='page-restaurant d-flex'>
            <div className='restaurant-section'>
              <RestaurantMenuHeader restaurant={item} />
              <RestaurantMenuTopNavigation menuItems={items} />

              <section className='restaurant-menu'>
                <RestaurantMenuListBlock menu={item.restaurantMenu} />
                <RestaurantMenuBottomPartnerInfo legal={item.legal} />
                <RestaurantMenuBottomLinks />
              </section>
            </div>
            <Cart cartOrder={cartOrder} />
          </div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
}

export default memo(RestaurantMenu);
