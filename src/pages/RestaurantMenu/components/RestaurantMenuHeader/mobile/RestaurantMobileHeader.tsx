import React, { memo } from 'react';
import RatingComponent from '../../../../../common/template/components/RatingComponent/RatingComponent';
import { RestaurantDto } from '../../../../../modules/restaurants/types';
import './restaurantMenuMobileHeader.less';

interface Props {
  restaurant: RestaurantDto;
}

function RestaurantMobileHeader({ restaurant }: Props) {
  const { name, image, rating } = restaurant;

  return (
    <>
      <div className='restaurant__background--mobile'>
        <img src={image?.averageImg ?? ''} className='restaurant-bg-image' alt={name} />
      </div>
      <div className='restaurant-descr--mobile'>
        <div>
          <div className='restaurant-descr__delivery_info--mobile delivery_type--long_distance--mobile'>
            <img src='http://localhost:8000/img/icons/long_distance.svg' alt='Дальняя доставка' />
            60-70 мин{' '}
          </div>
        </div>
        <h1>
          <span className='--title'>{name}</span>
        </h1>
      </div>
      <div className='restaurant__info--mobile'>
        <div className='container d-flex'>
          <span className='restaurant-box-second__rating--mobile'>
            <RatingComponent rating={rating} />
          </span>
          <span className='restaurant-box-second__bull'>•</span>
          <span>Прием заказов до 20:30</span>
          <span className='restaurant-box-second__bull'>•</span>
          <span>₽</span>
        </div>
      </div>
      <div className='restaurant__info--mobile'>
        <div className='container'>
          <div className='delivery_type__title--mobile'>
            <div className='tooltip-information'>
              Дальняя доставка{' '}
              <svg
                width={17}
                height={17}
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M9.4375 13H7.73828V6.66016H9.4375V13ZM7.63867 5.01953C7.63867 4.76562 7.72266 4.55664 7.89062 4.39258C8.0625 4.22852 8.29492 4.14648 8.58789 4.14648C8.87695 4.14648 9.10742 4.22852 9.2793 4.39258C9.45117 4.55664 9.53711 4.76562 9.53711 5.01953C9.53711 5.27734 9.44922 5.48828 9.27344 5.65234C9.10156 5.81641 8.87305 5.89844 8.58789 5.89844C8.30273 5.89844 8.07227 5.81641 7.89648 5.65234C7.72461 5.48828 7.63867 5.27734 7.63867 5.01953Z'
                  fill='black'
                />
                <circle opacity='0.4' cx='8.5' cy='8.5' r='7.75' stroke='black' strokeWidth='1.5' />
              </svg>
            </div>
            <div className='delivery_type__price delivery_type__price--long_distance'>190 ₽</div>
          </div>
          <p className='delivery_type__description--mobile'>
            Ваш заказ будет доставлен курьерами Broniboy. Ресторан находится далеко от вашего
            адреса, поэтому доставка может занять более 40 минут.
          </p>
        </div>
      </div>
    </>
  );
}

export default memo(RestaurantMobileHeader);
