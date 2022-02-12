import React, { memo } from 'react';
import RestaurantMenuListBlock from './components/RestaurantMenuListBlock/RestaurantMenuListBlock';
import RestaurantMenuBottomLinks from './RestaurantMenuBottomLinks/RestaurantMenuBottomLinks';
import RestaurantMenuTopNavigation from './components/RestaurantMenuTopNavigation/RestaurantMenuTopNavigation';
import RestaurantMenuBottomPartnerInfo from './components/RestaurantMenuBottomPartnerInfo/RestaurantMenuBottomPartnerInfo';
import Cart from '../Cart/Cart';
import RestaurantMenuHeader from './components/RestaurantMenuHeader/RestaurantMenuHeader';
import { TLinkWithText } from '../../common/types/utilTypes';

interface Props {}

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
    text: 'Мясо',
  },
  {
    link: '/',
    text: 'Печень',
  },
];

function RestaurantMenu(props: Props) {
  const {} = props;

  return (
    <div className='container'>
      <div className='page-restaurant'>
        <div className='restaurant-section'>
          <RestaurantMenuHeader
            deliveryBlockHidden
            closeTime='21:00'
            priceRating={3}
            rating={5}
            restaurantName='Тарантино бар'
            restaruantImgSrc='https://images.broniboy.ru/RBMkcsNpDbBAn3YAtSXoVdyzxEw=/1200x0/smart/filters:smart_sharpen():allow_webp(false)/own/d83eb13e-0245-40db-8e18-aa88db999859/fe4691e44863606f086421346c4b48fc.jpg'
          />
          <RestaurantMenuTopNavigation menuItems={menuItems} />
          <section className='restaurant-menu'>
            <RestaurantMenuListBlock />
            <RestaurantMenuBottomPartnerInfo
              partnerAddress='ул. Ошарская, д. 95'
              partnerINN='526097844066'
              partnerName='Индивидуальный предприниматель Ладыгина Марина Игоревна'
            />
            <RestaurantMenuBottomLinks />
          </section>
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default memo(RestaurantMenu);
