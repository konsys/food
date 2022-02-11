import React, { memo } from 'react';
import { MenuListDto } from '../../../../../common/types/dto';

type Props = MenuListDto;

function RestarauntMenuListItem(props: Props) {
  const { name, imgSrc, description, price, amount, weight } = props;

  return (
    <div className='service-list__item col-lg-4 col-md-6 col-sm-6 col-xs-12'>
      <div className='restaurant-menu-item clearfix'>
        <div className='restaurant-menu-item__image restaurant-menu-item__image--full restaurant-menu-item__image--fill'>
          <img alt='Лосось' className=' lazyloaded' src={imgSrc} />
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
          <div className='restaurant-menu-item__prices'>
            <span className='restaurant-menu-item__price'>{price} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RestarauntMenuListItem);
