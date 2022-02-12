import React, { memo } from 'react';

interface Props {}

function RestaurantMenuItem(props: Props) {
  const {} = props;

  return (
    <div className='service-list__item'>
      <div className='restaurant-menu-item clearfix'>
        <div className='restaurant-menu-item-info'>
          <div className='restaurant-menu-item-info__title'>
            Лосось <span className='restaurant-menu-item-info__amount' />
          </div>
          <p>Нежный лосось завернутый в японский рис и лист водоросли нори.</p>
          <div className='restaurant-menu-item__prices'>
            <span className='restaurant-menu-item__price'>280 ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RestaurantMenuItem);
