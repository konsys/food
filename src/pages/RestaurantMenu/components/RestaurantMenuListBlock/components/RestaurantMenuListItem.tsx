import React, { memo } from 'react';
import { RestarauntMenuDto } from '../../../../../modules/restaurantMenu/types';
import './restaurantMenuListItem.less';

type Props = {
  item: RestarauntMenuDto;
};

function RestaurantMenuListItem({ item }: Props) {
  const { name, image, description, price, amount, weight } = item;

  return (
    <div className='service-list__item col-lg-4 col-md-6 col-sm-6 col-xs-12'>
      <div className='restaurant-menu-item clearfix'>
        <div className='restaurant-menu-item__image restaurant-menu-item__image--full restaurant-menu-item__image--fill'>
          <img
            alt='Лосось'
            className=' lazyloaded'
            src={image?.averageImg ? image.averageImg : ''}
          />
        </div>
        <div className='restaurant-menu-item-info'>
          <div className='restaurant-menu-item-info__title'>
            {name}{' '}
            {(amount || weight) && (
              <span className='restaurant-menu-item-info__amount'>
                {amount ? `${amount} шт.` : `${weight} гр.`}
              </span>
            )}
          </div>
          <p>{description}</p>
          <div>
            <span className='restaurant-menu-item__price'>{price} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RestaurantMenuListItem);
