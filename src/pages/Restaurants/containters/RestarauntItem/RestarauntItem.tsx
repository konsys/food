import React, { memo } from 'react';
import { ReactComponent as RatingIcon } from '../../../../svg/rating.svg';
import { ReactComponent as LongDistance } from '../../../../svg/long-distance.svg';
import { ReactComponent as DeliveryStandard } from '../../../../svg/delivery-standard.svg';
import { ReactComponent as HightDemand } from '../../../../svg/high-demand.svg';
import { EDeliveryType, RestarauntDto } from '../../../../modules/Restaruants/types';
import './restarauntItem.less';

type Props = RestarauntDto;

function RestarauntItem(props: Props) {
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
          <a href={`localhost:3000/restaurants/${uuid}`} title={name}>
            <img
              title={name}
              alt={name}
              className='restaurant-cover-image transition lazyloaded'
              src={image?.averageImg ?? ''}
            />

            <div className='restaurant-box-top-logo clearfix'>
              {logoUrl && <img alt={name} className=' lazyloaded' src={logoUrl} />}
            </div>
          </a>
        </div>
        <div className='restaurant-box-second'>
          <a
            href='https://broniboy.ru/nn/restaurants/p_tri-apelsina/'
            className='restaurant-box-second__link'
            title='Три апельсина'
          >
            <div className='restaurant-box-second__title'>Три апельсина</div>
          </a>
          <div className='restaurant-box-second__description'>
            <div className='restaurant-box-second__rating d-flex align-items-end'>
              <div className='restaurant-box-second__rating--number'>5.0</div>
              <div className='restaurant-box-second__rating--star'>
                <svg>
                  <path d='M5.877.27a.438.438,0,0,1,.4-.27A.526.526,0,0,1,6.72.27L8.271,3.44a.522.522,0,0,0,.371.27l3.474.506a.581.581,0,0,1,.4.337.485.485,0,0,1-.135.506L9.857,7.521a.5.5,0,0,0-.135.438l.607,3.474a.488.488,0,0,1-.708.506l-3.1-1.653a.5.5,0,0,0-.438,0l-3.1,1.653a.458.458,0,0,1-.506-.034.518.518,0,0,1-.2-.472l.607-3.474a.531.531,0,0,0-.135-.438L.211,5.059a.564.564,0,0,1-.135-.506.522.522,0,0,1,.4-.337L3.955,3.71a.522.522,0,0,0,.371-.27Zm0,0' />
                </svg>
              </div>
              <div className='restaurant-box-second__info'>Китайская кухня, </div>
              <div className='restaurant-box-second__info'>₽₽₽</div>
            </div>
            <div className='restaurant-box-second__delivery d-flex'>
              <div>
                <img
                  src='https://broniboy.ru/img/icons/delivery/default.svg'
                  className='restaurant-box-second__delivery-icon delivery_type--default'
                  alt='Доставка от Broniboy'
                  title='Доставка от Broniboy'
                />
                <span className='restaurant-box-second__info'>190 ₽, бесплатно от 1499 ₽</span>
              </div>
              <div>
                <span className='restaurant-box-second__delivery-time'>40-50 мин</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='restaurant-box-second'>
          <a
            href={`localhost:3000/restaurants/${uuid}`}
            className='restaurant-box-second__link'
            title='Тарантино бар'
          >
            <div className='restaurant-box-second__title'>{name}</div>
          </a>
          <div className='restaurant-box-second__description d-flex align-items-center'>
            <div className='restaurant-box-second__rating' style={{ color: ratingColor }}>
              <div>{rating}</div>
              <RatingIcon className='restaurant-box-second__rating--star' />
            </div>
            <div className='restaurant-box-second__info'>{foodType}</div>
            <div className='restaurant-box-second__info'>
              {Array(priceRate)
                .fill(0)
                .map(() => '₽')}
            </div>
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
        </div> */}
      </div>
    </div>
  );
}

export default memo(RestarauntItem);
