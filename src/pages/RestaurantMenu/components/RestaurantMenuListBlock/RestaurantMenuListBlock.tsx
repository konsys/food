import React, { memo } from 'react';
import { RestarauntMenuDto } from '../../../../modules/restaurantMenu/types';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';
import './restaurantMenuListBlock.less';

interface Props {
  menu: RestarauntMenuDto[];
}

function RestaurantMenuListBlock(props: Props) {
  const { menu } = props;

  return (
    <>
      <div className='restaurant-menu__section-title'>
        <h2>Суши</h2>
      </div>
      <div className='restaurant-menu__service-list row'>
        {menu.map((item, index) => (
          <RestaurantMenuListItem item={item} key={index} />
        ))}
      </div>
      <div className='service-list' />
    </>
  );
}

export default memo(RestaurantMenuListBlock);
