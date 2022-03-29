import React from 'react';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';
import DeliveryRange from '../../../../common/template/components/DeliveryRange/DeliveryRange';
import { RestaurantDto } from '../../../../modules/restaurants/types';
import { DeliveryDto, DeliveryRangeDto } from '../../../../modules/delivery/types';
import RestaurantMobileHeader from './mobile/RestaurantMobileHeader';

import './restaurantMenuHeader.less';

interface Props {
  restaurant: RestaurantDto;
  delivery: DeliveryDto;
}

function RestaurantMenuHeader({ restaurant, delivery }: Props) {
  const { name, image, rating } = restaurant;
  const { price, maxTimeMinutes, minTimeMinutes } = delivery;

  return (
    <section className='restaurant restaurant--shop'>
      <div className='restaurant-content d-none d-md-block'>
        <div className='restaurant__background'>
          <img src={image?.averageImg ?? ''} className='restaurant-bg-image' alt={name} />
        </div>
        <div className='restaurant-descr  d-md-block'>
          <div className='restaurant-descr__header d-flex'>
            <div className='restaurant-descr__header--title'>{name}</div>
            <div className='restaurant-descr__header--bull'>&nbsp;•&nbsp;</div>

            <RatingComponent rating={rating} />
          </div>

          <div className='restaurant-info--shop d-flex justify-content-between'>
            <DeliveryRange
              range={DeliveryRangeDto.STANDARD}
              deliveryPrice={price}
              maxDeliveryMinutes={maxTimeMinutes}
              minDeliveryMinutes={minTimeMinutes}
            />
          </div>
        </div>
      </div>
      <div className='restaurant-content d-block d-md-none'>
        <RestaurantMobileHeader restaurant={restaurant} />
      </div>
    </section>
  );
}

export default RestaurantMenuHeader;
