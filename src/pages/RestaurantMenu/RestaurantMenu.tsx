import React, { memo } from 'react';
import RestaurantMenuListBlock from './components/RestaurantMenuListBlock/RestaurantMenuListBlock';
import RestaurantMenuBottomLinks from './RestaurantMenuBottomLinks/RestaurantMenuBottomLinks';
import RestaurantMenuTopNavigation from './components/RestaurantMenuTopNavigation/RestaurantMenuTopNavigation';
import RestaurantMenuBottomPartnerInfo from './components/RestaurantMenuBottomPartnerInfo/RestaurantMenuBottomPartnerInfo';
import Cart from '../Cart/Cart';
import RestaurantMenuHeader from './components/RestaurantMenuHeader/RestaurantMenuHeader';
import { TLinkWithText } from '../../common/types/utilTypes';
import './restaurantMenu.less';
import { RestarauntMenuDto } from '../../modules/restaurantMenu/types';

const menuItems1: TLinkWithText[] = [
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

type Props = RestarauntMenuDto;

function RestaurantMenu(props: Props) {
  console.log(11111111111, props);
  const {
    closeTime,
    openTime,
    priceRating,
    rating,
    name,
    restaurantImg,
    deliveryPrice,
    deliveryRange,
    maxDeliveryMinutes,
    minDeliveryMinutes,
    menuItems,
    restaurantPartnerAddress,
    restaurantPartnerLegal,
    restaurantPartnerInn,
    restaurantPartnerKPP,
    restaurantPartnerOGRN,
  } = props;

  return (
    <div className='container'>
      <div className='page-restaurant d-flex'>
        <div className='restaurant-section'>
          <RestaurantMenuHeader
            closeTime={closeTime}
            openTime={openTime}
            priceRating={priceRating}
            rating={rating}
            restaurantName={name}
            restaurantImg={restaurantImg}
            deliveryPrice={deliveryPrice}
            deliveryRange={deliveryRange}
            maxDeliveryMinutes={maxDeliveryMinutes}
            minDeliveryMinutes={minDeliveryMinutes}
          />
          <RestaurantMenuTopNavigation menuItems={menuItems} />

          <section className='restaurant-menu'>
            <RestaurantMenuListBlock />
            <RestaurantMenuBottomPartnerInfo
              partnerAddress={restaurantPartnerAddress}
              partnerINN={restaurantPartnerInn}
              partnerName={restaurantPartnerLegal}
              partnerKPP={restaurantPartnerKPP}
              partnerOGRN={restaurantPartnerOGRN}
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
