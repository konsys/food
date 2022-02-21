import React, { memo } from 'react';
import { useGate, useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import RestaurantMenuListBlock from './components/RestaurantMenuListBlock/RestaurantMenuListBlock';
import RestaurantMenuBottomLinks from './RestaurantMenuBottomLinks/RestaurantMenuBottomLinks';
import RestaurantMenuTopNavigation from './components/RestaurantMenuTopNavigation/RestaurantMenuTopNavigation';
import RestaurantMenuBottomPartnerInfo from './components/RestaurantMenuBottomPartnerInfo/RestaurantMenuBottomPartnerInfo';
import Cart from '../Cart/Cart';
import RestaurantMenuHeader from './components/RestaurantMenuHeader/RestaurantMenuHeader';
import { TLinkWithText } from '../../common/types/utilTypes';
import './restaurantMenu.less';
import { RestaurantMenuModel, RestaurantModel } from '../../store';

const menuItems: TLinkWithText[] = [
  {
    link: '/',
    text: 'Суши',
  },
  {
    link: '/',
    text: 'Роллы',
  },
  {
    link: '/',
    text: 'Гунканы',
  },
  {
    link: '/',
    text: 'Биг сайз',
  },
  {
    link: '/',
    text: 'Поке',
  },
  {
    link: '/',
    text: 'Стартеры',
  },
  {
    link: '/',
    text: 'Салаты',
  },
  {
    link: '/',
    text: 'Супы',
  },
  {
    link: '/',
    text: 'Паста',
  },
  {
    link: '/',
    text: 'Рыба и птица',
  },
  {
    link: '/',
    text: 'Мясо0',
  },
  {
    link: '/',
    text: 'Мясо1',
  },
  {
    link: 'meet',
    text: 'Мясо2',
  },
  {
    link: 'meet',
    text: 'Мясо3',
  },
  {
    link: 'meet',
    text: 'Мясо4',
  },
];

const { $itemStore, ItemGate } = RestaurantModel;

function RestaurantMenu() {
  const { uuid } = useParams<{ uuid: string }>();
  useGate(ItemGate, uuid);
  const { item } = useStore($itemStore);
  return (
    <div>
      {item ? (
        <div className='container'>
          <div className='page-restaurant d-flex'>
            <div className='restaurant-section'>
              <RestaurantMenuHeader restaurant={item} />
              <RestaurantMenuTopNavigation menuItems={menuItems} />

              <section className='restaurant-menu'>
                <RestaurantMenuListBlock menu={item.restaurantMenu} />
                <RestaurantMenuBottomPartnerInfo legal={item.legal} />
                <RestaurantMenuBottomLinks />
              </section>
            </div>
            <Cart />
          </div>
        </div>
      ) : (
        <span />
      )}
    </div>
  );
}

export default memo(RestaurantMenu);
