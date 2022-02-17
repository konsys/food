import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { TLinkWithText } from '../../../../common/types/utilTypes';
import './restaurantMenuBottomLinksItem.less';

interface Props {
  items: TLinkWithText[];
}

function RestaurantMenuBottomLinksItem(props: Props) {
  const { items } = props;

  return (
    <>
      {items.map(({ link, text }, index) => (
        <Link title={text} to={link} key={index} className='restaurant-menu-bottom-link'>
          {text}
        </Link>
      ))}
    </>
  );
}

export default memo(RestaurantMenuBottomLinksItem);
