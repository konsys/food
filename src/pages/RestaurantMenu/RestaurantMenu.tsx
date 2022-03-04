import React, { memo, useEffect, useState } from 'react';
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
import { RestaurantMenuDto } from '../../modules/restaurantMenu/types';
import { addToCart, changeOrderQuantity, deleteItemFromCart } from '../../modules/cart/utils';
import { TUuid } from '../../common/types';

const { $itemStore: restaurantStore, ItemGate } = RestaurantModel;
const { ItemGate: CartGate, $itemStore: cartStore } = CartModel;

function RestaurantMenu() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);
  useGate(CartGate, getClientUuid());
  const { item: cartOrder } = useStore(cartStore);
  const { item: restaurant } = useStore(restaurantStore);

  const items: TLinkWithText[] = restaurant
    ? grouppedByCategory(restaurant?.restaurantMenu, 'foodCategory.name').map((v) => ({
        link: v.title,
        text: v.title,
      }))
    : [];

  const addMenuToCart = (menuItem: RestaurantMenuDto, restaurantUuid: TUuid) =>
    addToCart(cartOrder, menuItem, restaurantUuid);
  const changeQuantity = (uuidToChange: TUuid, delta: number) =>
    changeOrderQuantity(cartOrder, uuidToChange, delta);
  const deleteFromCart = (uuidToDelete: TUuid) => deleteItemFromCart(cartOrder, uuidToDelete);

  return (
    <div className='container'>
      {restaurant ? (
        <div className='page-restaurant d-flex'>
          <div className='restaurant-section'>
            <RestaurantMenuHeader restaurant={restaurant} />
            <RestaurantMenuTopNavigation menuItems={items} />

            <section className='restaurant-menu'>
              <RestaurantMenuListBlock
                menu={restaurant.restaurantMenu}
                addToCart={addMenuToCart}
                cartOrder={cartOrder?.order}
                restaurantUuid={restaurant.uuid}
              />
              <RestaurantMenuBottomPartnerInfo legal={restaurant.legal} />
              <RestaurantMenuBottomLinks />
            </section>
          </div>
          <div className='d-none d-md-block'>
            <Cart
              cartOrder={cartOrder}
              changeQuantity={changeQuantity}
              deleteFromCart={deleteFromCart}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(RestaurantMenu);
