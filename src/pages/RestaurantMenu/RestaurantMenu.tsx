import React, { memo } from 'react';
import { useGate, useStore } from 'effector-react';
import { useLocation, useParams } from 'react-router-dom';
import { Col, Row, Spin } from 'antd';
import RestaurantMenuListBlock from './components/RestaurantMenuListBlock/RestaurantMenuListBlock';
import RestaurantMenuBottomLinks from './RestaurantMenuBottomLinks/RestaurantMenuBottomLinks';
import RestaurantMenuBottomPartnerInfo from './components/RestaurantMenuBottomPartnerInfo/RestaurantMenuBottomPartnerInfo';
import RestaurantMenuHeader from './components/RestaurantMenuHeader/RestaurantMenuHeader';
import { CartModel, RestaurantModel } from '../../store';
import { grouppedByCategory } from '../../modules/restaurantMenu/utils';
import RestaurantMenuTopNavigation from './components/RestaurantMenuTopNavigation/RestaurantMenuTopNavigation';
import { TLinkWithText } from '../../common/types/utilTypes';
import { RestaurantMenuDto } from '../../modules/restaurantMenu/types';
import { addToCart } from '../../modules/cart/utils';
import { TUuid } from '../../common/types';
import { useBreadcrumbs } from '../../modules/breadcrumbs/useBreadcrumbs';
import { restaurantBreabcrums } from '../../routes/paths';
import CartView from '../Cart/components/CartView/CartView';

const { $itemStore: restaurantStore, ItemGate } = RestaurantModel;
const { $itemStore: cartStore } = CartModel;

function RestaurantMenu() {
  const { uuid } = useParams<{ uuid: TUuid }>();

  const location = useLocation();

  useGate(ItemGate, uuid);
  const cart = useStore(cartStore);

  const { item: restaurant, pending: restaurantPending } =
    useStore(restaurantStore);

  useBreadcrumbs([
    restaurantBreabcrums,
    {
      path: location.pathname,
      title: restaurant?.name ?? '',
      key: restaurant?.uuid ?? '',
    },
  ]);

  const items: TLinkWithText[] = restaurant
    ? grouppedByCategory(restaurant?.restaurantMenu, 'foodCategory.name').map(
        (v) => ({
          link: v.title,
          text: v.title,
        }),
      )
    : [];

  const addMenuToCart = (menuItem: RestaurantMenuDto) =>
    addToCart(cart.item, menuItem);

  return (
    <div className="container">
      <Spin spinning={restaurantPending}>
        {restaurant ? (
          <Row>
            <Col span={cart.item ? 16 : 24}>
              <RestaurantMenuHeader restaurant={restaurant} />
              <RestaurantMenuTopNavigation menuItems={items} />

              <section className="restaurant-menu">
                <RestaurantMenuListBlock
                  menu={restaurant.restaurantMenu}
                  addToCart={addMenuToCart}
                  cartOrder={cart?.item?.order}
                />
                <RestaurantMenuBottomPartnerInfo legal={restaurant.legal} />
                <RestaurantMenuBottomLinks />
              </section>
            </Col>
            <Col span={cart.item ? 8 : 0}>
              <CartView cart={cart} />
            </Col>
          </Row>
        ) : (
          ''
        )}
      </Spin>
    </div>
  );
}

export default memo(RestaurantMenu);
