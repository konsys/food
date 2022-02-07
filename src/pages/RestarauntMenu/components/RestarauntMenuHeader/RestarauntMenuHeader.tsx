import React from 'react';
import { RatingDto } from '../../../../common/types/dto';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';
import PriceRatingComponent from '../../../../common/template/components/PriceRatingComponent/PriceRatingComponent';
import DeliveryRange, {
  EDeliveryRange,
} from '../../../../common/template/components/DeliveryRange/DeliveryRange';
import { TCloseTime } from '../../../../common/types/time';

interface Props {
  restaruantImgSrc: string;
  restarauntName: string;
  rating: RatingDto;
  priceRating: RatingDto;
  closeTime: TCloseTime;
}

function RestarauntMenuHeader(props: Props) {
  const { restarauntName, restaruantImgSrc, rating, priceRating, closeTime } = props;
  return (
    <section className='restaurant restaurant--shop'>
      <div className='restaurant-content'>
        <div className='restaurant__background'>
          <img src={restaruantImgSrc} className='restaurant-bg-image' alt={restarauntName} />
        </div>
        <div className='restaurant-descr'>
          <h1>
            <span className='--title'>{restarauntName}</span>
          </h1>
          <i className='restaurant-descr__bull'>&nbsp;•&nbsp;</i>
          <span className='restaurant-box-second__rating'>
            <RatingComponent rating={rating} />
          </span>
          <div className='restaurant-info restaurant-info--shop'>
            <div className='restaurant-info__delivery'>
              <div className='restaurant-info__delivery-icon hidden delivery_type--long_distance'>
                <img src='/img/icons/delivery/long_distance.svg' alt='Дальняя доставка' />
              </div>
              <div className='restaurant-info__delivery-info hidden'>
                <DeliveryRange
                  range={EDeliveryRange.LONG}
                  deliveryPrice={190}
                  maxDeliveryTime={80}
                  minDeliveryTime={70}
                />
              </div>
            </div>
            <div className='restaurant-info__open-hours'>
              <span>Прием заказов до {closeTime}</span>
              <span>•</span>
              <PriceRatingComponent rating={priceRating} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestarauntMenuHeader;
