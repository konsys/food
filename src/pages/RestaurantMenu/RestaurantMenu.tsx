import React, { memo, useMemo } from 'react';
import { useGate, useStore } from 'effector-react';
import { useLocation, useParams } from 'react-router-dom';
import { Col, Row, Spin } from 'antd';
import { WindowsFilled } from '@ant-design/icons';
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
import { deliveryFactory } from '../../modules/delivery/deliveryFactory';
import MobileCartButton from '../Cart/components/MobileCart/MobileCartButton/MobileCartButton';
import { TUuid } from '../../common/types';
import { useBreadcrumbs } from '../../modules/breadcrumbs/useBreadcrumbs';
import { restaurantBreabcrums } from '../../routes/paths';

const { $itemStore: restaurantStore, ItemGate } = RestaurantModel;
const { $itemStore: cartStore } = CartModel;

function RestaurantMenu() {
  const { uuid } = useParams<{ uuid: TUuid }>();

  const location = useLocation();

  useGate(ItemGate, uuid);
  const { item: cartOrder, pending: cartPending } = useStore(cartStore);

  const { item: restaurant, pending: restaurantPending } =
    useStore(restaurantStore);

  useBreadcrumbs([
    restaurantBreabcrums,
    {
      path: location.pathname,
      title: restaurant?.name ?? '',
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
    addToCart(cartOrder, menuItem);

  const cartView = useMemo(
    () =>
      cartOrder ? (
        <Spin spinning={cartPending}>
          <Row>
            <Col xs={{ span: 0 }} lg={{ span: 24 }}>
              <Cart sideView />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 0 }}>
              <MobileCartButton cartOrder={cartOrder} />
            </Col>
          </Row>
        </Spin>
      ) : (
        ''
      ),
    [cartOrder],
  );

  return (
    <div className="container">
      <Spin spinning={restaurantPending}>
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
                />
                <RestaurantMenuBottomPartnerInfo legal={restaurant.legal} />
                <RestaurantMenuBottomLinks />
              </section>
            </div>
            {cartView}
          </div>
        ) : (
          ''
        )}
      </Spin>
    </div>
  );
}

export default memo(RestaurantMenu);
