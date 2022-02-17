import React from 'react';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';
import PriceRatingComponent from '../../../../common/template/components/PriceRatingComponent/PriceRatingComponent';
import DeliveryRange from '../../../../common/template/components/DeliveryRange/DeliveryRange';

import './restaurantMenuHeader.less';
import { DeliveryRangeDto, RatingDto } from '../../../../modules/restaurantMenu/types';

interface Props {
  restaurantImgSrc: string;
  restaurantName: string;
  rating: RatingDto;
  priceRating: RatingDto;
  closeTime: Date;
  openTime: Date;
  deliveryPrice: number;
  maxDeliveryMinutes: number;
  minDeliveryMinutes: number;
  deliveryRange: DeliveryRangeDto;
}

function RestaurantMenuHeader(props: Props) {
  const {
    restaurantName,
    restaurantImgSrc,
    rating,
    priceRating,
    closeTime,
    deliveryPrice,
    maxDeliveryMinutes,
    minDeliveryMinutes,
    deliveryRange,
    openTime,
  } = props;
  return (
    <section className='restaurant restaurant--shop'>
      <div className='restaurant-content'>
        <div className='restaurant__background'>
          <img src={restaurantImgSrc} className='restaurant-bg-image' alt={restaurantName} />
        </div>

        <div className='restaurant-descr'>
          <div className='restaurant-descr__header d-flex'>
            <div className='restaurant-descr__header--title'>{restaurantName}</div>
            <div className='restaurant-descr__header--bull'>&nbsp;•&nbsp;</div>
            <div className='restaurant-descr__header--rating d-flex align-items-center'>
              <RatingComponent rating={rating} />
            </div>
          </div>

          <div className='restaurant-info--shop d-flex justify-content-between'>
            <div className='restaurant-info__delivery'>
              <DeliveryRange
                range={deliveryRange}
                deliveryPrice={deliveryPrice}
                maxDeliveryMinutes={maxDeliveryMinutes}
                minDeliveryMinutes={minDeliveryMinutes}
              />
            </div>
            <div className='restaurant-info__open-hours'>
              <span>
                Прием заказов c {openTime} до {closeTime}
              </span>
              <span> • </span>
              <PriceRatingComponent rating={priceRating} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantMenuHeader;
