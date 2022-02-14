import React from 'react';
import { DeliveryRangeDto, RatingDto } from '../../../../common/types/dto';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';
import PriceRatingComponent from '../../../../common/template/components/PriceRatingComponent/PriceRatingComponent';
import DeliveryRange from '../../../../common/template/components/DeliveryRange/DeliveryRange';
import { TCloseTime } from '../../../../common/types/time';

import './restaurantMenuHeader.less';

interface Props {
  restaruantImgSrc: string;
  restaurantName: string;
  rating: RatingDto;
  priceRating: RatingDto;
  closeTime: TCloseTime;
  deliveryBlockHidden: boolean;
}

function RestaurantMenuHeader(props: Props) {
  const { restaurantName, restaruantImgSrc, rating, priceRating, closeTime, deliveryBlockHidden } =
    props;
  return (
    <section className='restaurant restaurant--shop'>
      <div className='restaurant-content'>
        <div className='restaurant__background'>
          <img src={restaruantImgSrc} className='restaurant-bg-image' alt={restaurantName} />
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
                range={DeliveryRangeDto.LONG}
                deliveryPrice={190}
                maxDeliveryTime={80}
                minDeliveryTime={70}
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
