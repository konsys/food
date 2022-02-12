import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RatingIcon } from '../../../../svg/rating.svg';
import { ReactComponent as LongDistance } from '../../../../svg/long-distance.svg';
import { ReactComponent as DeliveryStandard } from '../../../../svg/delivery-standard.svg';
import { ReactComponent as HightDemand } from '../../../../svg/high-demand.svg';
import { EDeliveryType, RestaurantDto } from '../../../../modules/Restaruants/types';
import './restaurantItem.less';

type Props = RestaurantDto;

function RestaurantItem(props: Props) {
  const {
    name,
    uuid,
    image,
    logoUrl,
    rating,
    ratingColor,
    priceRate,
    foodType,
    price,
    deliveryFullTime,
    deliveryType,
  } = props;

  return (
    <div className='col-lg-4 col-md-6 col-12'>
      <div className='restaurant-box'>
        <div className='restaurant-box-top'>
          <Link to={`/restaurants/${uuid}`} title={name}>
            <img
              title={name}
              alt={name}
              className='restaurant-cover-image transition lazyloaded'
              src={image?.averageImg ?? ''}
            />

            <div className='restaurant-box-top-logo clearfix'>
              {logoUrl && <img alt={name} className=' lazyloaded' src={logoUrl} />}
            </div>
          </Link>
        </div>
        <div className='restaurant-box-second'>
          <Link to={`/restaurants/${uuid}`} className='restaurant-box-second__link' title={name}>
            <div className='restaurant-box-second__title'>{name}</div>
          </Link>
          <div className='restaurant-box-second__description'>
            <div className='restaurant-box-second__rating d-flex align-items-end'>
              <div className='restaurant-box-second__rating--number' style={{ color: ratingColor }}>
                {rating}.0
              </div>
              <div className='restaurant-box-second__rating--star'>
                <RatingIcon />
              </div>
              <div className='restaurant-box-second__info'>{foodType}, </div>
              <div className='restaurant-box-second__info'>
                {Array(priceRate)
                  .fill(0)
                  .map(() => '₽')}
              </div>
            </div>
            <div className='restaurant-box-second__delivery d-flex'>
              <div>
                {deliveryType === EDeliveryType.LONG_DISTANCE ? (
                  <LongDistance className='restaurant-box-second__delivery-icon delivery_type--long_distance' />
                ) : (
                  ''
                )}
                {deliveryType === EDeliveryType.STANDARD ? (
                  <DeliveryStandard className='restaurant-box-second__delivery-icon delivery_type--default' />
                ) : (
                  ''
                )}
                {deliveryType === EDeliveryType.HIGH_DEMAND ? (
                  <HightDemand className='restaurant-box-second__delivery-icon delivery_type--high_demand' />
                ) : (
                  ''
                )}
                {/* TODO add delivery price */}
                <span className='restaurant-box-second__info'>{price} ₽, бесплатно от 1499 ₽</span>
              </div>
              <div>
                {/* TODO add fll time */}
                <span className='restaurant-box-second__delivery-time'>
                  {deliveryFullTime} 40-50 мин
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RestaurantItem);
