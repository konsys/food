import React, { memo } from 'react';
import RestaurantMenuListBlock from './components/RestaurantMenuListBlock/RestaurantMenuListBlock';
import RestaurantMenuBottomLinks from './RestaurantMenuBottomLinks/RestaurantMenuBottomLinks';
import RestaurantMenuTopNavigation from './components/RestaurantMenuTopNavigation/RestaurantMenuTopNavigation';
import RestaurantMenuBottomPartnerInfo from './components/RestaurantMenuBottomPartnerInfo/RestaurantMenuBottomPartnerInfo';
import Cart from '../Cart/Cart';
import RestaurantMenuHeader from './components/RestaurantMenuHeader/RestaurantMenuHeader';
import { TLinkWithText } from '../../common/types/utilTypes';
import './restaurantMenu.less';
import { RatingDto } from '../../common/types/dto';
import { TCloseTime } from '../../common/types/time';

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

interface Props {
  closeTime: TCloseTime;
  priceRating: RatingDto;
  rating: RatingDto;
  restaurantName: string;
  restaurantImgSrc: string;
}

function RestaurantMenu(props: Props) {
  const { closeTime, priceRating, rating, restaurantName, restaurantImgSrc } = props;

  return (
    <div className='container'>
      <div className='page-restaurant d-flex'>
        <div className='restaurant-section'>
          <RestaurantMenuHeader
            closeTime={closeTime}
            priceRating={priceRating}
            rating={rating}
            restaurantName={restaurantName}
            restaurantImgSrc={restaurantImgSrc}
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
