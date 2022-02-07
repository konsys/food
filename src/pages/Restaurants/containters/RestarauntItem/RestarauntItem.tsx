import React, { memo } from 'react';
import { ReactComponent as Rating } from '../../../../svg/rating.svg';
import { ReactComponent as LongDistance } from '../../../../svg/long-distance.svg';
import { ReactComponent as DeliveryStandard } from '../../../../svg/delivery-standard.svg';
import { ReactComponent as HightDemand } from '../../../../svg/high-demand.svg';
import { RatingDto } from '../../../../common/types/dto';

export type RestarauntDto = {
  name: string;
  uuid: string;
  deliveryType: EDeliveryType;
  deliveryFullTime: string;
  price: number;
  img: string;
  logoUrl: string;
  rating: string;
  ratingColor: string;
  priceRate: RatingDto;
  foodType: EFoodType;
};
export enum EFoodType {
  EUROPIAN = 'Европейская кухня',
  GEORGIAN = 'Европейская кухня',
  CHINEESE = 'Китайская кухня',
  JAPAN = 'Японская кухня',
  INDIAN = 'Индийская кухня',
}

export enum EDeliveryType {
  LONG_DISTANCE,
  STANDARD,
  HIGH_DEMAND,
}
type Props = RestarauntDto;

function RestarauntItem(props: Props) {
  const {
    name,
    uuid,
    img,
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
    <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
      <div className='restaurant-box '>
        <div className='restaurant-box-top'>
          <a href={`localhost:3000/restaurants/${uuid}`} title={name}>
            <img
              title={name}
              alt={name}
              className='restaurant-cover-image transition lazyloaded'
              src={img}
            />

            <div className='restaurant-box-top-about clearfix'>
              <img alt={name} className=' lazyloaded' src={logoUrl} />
            </div>
          </a>
        </div>
        <div className='restaurant-box-second'>
          <a
            href={`localhost:3000/restaurants/${uuid}`}
            className='restaurant-box-second__link'
            title='Тарантино бар'
          >
            <div className='restaurant-box-second__title'>{name}</div>
          </a>
          <div className='restaurant-box-second__description'>
            <span className='restaurant-box-second__rating' style={{ color: ratingColor }}>
              <span>{rating}</span>
              <Rating className='restaurant-box-second__rating--star' />
            </span>
            <span className='restaurant-box-second__info'>{foodType} </span>
            <span className='restaurant-box-second__info'>
              {Array(priceRate)
                .fill(0)
                .map(() => '₽')}
            </span>
            <div className='restaurant-box-second__delivery'>
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

                <span className='restaurant-box-second__info'>{price} ₽</span>
              </div>
              <div>
                <span className='restaurant-box-second__delivery-time'>{deliveryFullTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RestarauntItem);
