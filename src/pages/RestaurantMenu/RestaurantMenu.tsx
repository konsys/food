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
import { RestaurantMenuDto } from '../../modules/restaurantMenu/types';
import { addToCart } from '../../modules/cart/utils';
import { TUuid } from '../../common/types';
import { deliveryFactory } from '../../modules/delivery/deliveryFactory';
import MobileCartButton from '../Cart/components/MobileCart/MobileCartButton/MobileCartButton';

const { $itemStore: restaurantStore, ItemGate } = RestaurantModel;
const { $itemStore: cartStore } = CartModel;

function RestaurantMenu() {
  const { uuid } = useParams<{ uuid: string }>();

  useGate(ItemGate, uuid);
  const { item: cartOrder } = useStore(cartStore);

  const { item: restaurant } = useStore(restaurantStore);

  const items: TLinkWithText[] = restaurant
    ? grouppedByCategory(restaurant?.restaurantMenu, 'foodCategory.name').map(
        (v) => ({
          link: v.title,
          text: v.title,
        }),
      )
    : [];

  const addMenuToCart = (menuItem: RestaurantMenuDto, restaurantUuid: TUuid) =>
    addToCart(cartOrder, menuItem, restaurantUuid);

  return (
    <div className="container">
      {restaurant ? (
        <div className="page-restaurant d-flex">
          <div className="restaurant-section col-lg-9 col-md-12 col-sm-12">
            <RestaurantMenuHeader
              restaurant={restaurant}
              delivery={deliveryFactory.build()}
            />
            <RestaurantMenuTopNavigation menuItems={items} />

            <section className="restaurant-menu">
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
          <div className="d-none d-lg-flex col-lg-3">
            <Cart sideView />
          </div>
          <div className="d-flex d-lg-none col-lg-3">
            <MobileCartButton cartOrder={cartOrder} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default memo(RestaurantMenu);
