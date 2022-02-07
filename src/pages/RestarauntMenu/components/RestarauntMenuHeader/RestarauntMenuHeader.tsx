import React from 'react';
import { DeliveryRangeDto, RatingDto } from '../../../../common/types/dto';
import RatingComponent from '../../../../common/template/components/RatingComponent/RatingComponent';
import PriceRatingComponent from '../../../../common/template/components/PriceRatingComponent/PriceRatingComponent';
import DeliveryRange from '../../../../common/template/components/DeliveryRange/DeliveryRange';
import { TCloseTime } from '../../../../common/types/time';
import { ReactComponent as LongDistance } from '../../../../svg/long-distance.svg';

interface Props {
  restaruantImgSrc: string;
  restarauntName: string;
  rating: RatingDto;
  priceRating: RatingDto;
  closeTime: TCloseTime;
  deliveryBlockHidden: boolean;
}

function RestarauntMenuHeader(props: Props) {
  const { restarauntName, restaruantImgSrc, rating, priceRating, closeTime, deliveryBlockHidden } =
    props;
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
              <div
                className={`${
                  deliveryBlockHidden ? 'hidden' : ''
                }  restaurant-info__delivery-icon  delivery_type--long_distance`}
              >
                <LongDistance />
              </div>
              <div
                className={`restaurant-info__delivery-info ${deliveryBlockHidden ? 'hidden' : ''}`}
              >
                <DeliveryRange
                  range={DeliveryRangeDto.LONG}
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
