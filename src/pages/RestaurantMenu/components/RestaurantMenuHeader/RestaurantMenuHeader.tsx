import React from 'react';
import { DeliveryRangeDto, RatingDto } from '../../../../common/types/dto';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';
import PriceRatingComponent from '../../../../common/template/components/PriceRatingComponent/PriceRatingComponent';
import DeliveryRange from '../../../../common/template/components/DeliveryRange/DeliveryRange';
import { TCloseTime } from '../../../../common/types/time';

import './restaurantMenuHeader.less';

interface Props {
  restaurantImgSrc: string;
  restaurantName: string;
  rating: RatingDto;
  priceRating: RatingDto;
  closeTime: TCloseTime;
  deliveryPrice: number;
  maxDeliveryTime: number;
  minDeliveryTime: number;
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
    maxDeliveryTime,
    minDeliveryTime,
    deliveryRange,
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
                maxDeliveryTime={maxDeliveryTime}
                minDeliveryTime={minDeliveryTime}
              />
            </div>
            <div className='restaurant-info__open-hours'>
              <span>Прием заказов до {closeTime}</span>
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
