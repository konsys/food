import React from 'react';
import { RestaurantDto } from '../../../../modules/restaurants/types';
import { DeliveryDto } from '../../../../modules/delivery/types';
import RestaurantMobileHeader from './mobile/RestaurantMobileHeader';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';

import './restaurantMenuHeader.less';

interface Props {
  restaurant: RestaurantDto;
}

function RestaurantMenuHeader({ restaurant }: Props) {
  const { name, image, rating } = restaurant;

  return (
    <section className="restaurant restaurant--shop">
      <div className="restaurant-content d-none d-md-block">
        <div className="restaurant__background">
          <img
            src={image?.averageImg ?? ''}
            className="restaurant-bg-image"
            alt={name}
          />
        </div>
        <div className="restaurant-descr  d-md-block">
          <div className="restaurant-descr__header d-flex">
            <div className="restaurant-descr__header--title">{name}</div>
            <div className="restaurant-descr__header--bull">&nbsp;•&nbsp;</div>

            <RatingComponent rating={rating} />
          </div>
        </div>
      </div>
      <div className="restaurant-content d-block d-md-none">
        <RestaurantMobileHeader restaurant={restaurant} />
      </div>
    </section>
  );
}

export default RestaurantMenuHeader;
