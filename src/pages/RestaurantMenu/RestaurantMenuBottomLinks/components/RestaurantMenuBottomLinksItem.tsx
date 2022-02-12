import React, { memo } from 'react';
import { TLinkWithText } from '../../../../common/types/utilTypes';

interface Props {
  items: TLinkWithText[];
}

function RestaurantMenuBottomLinksItem(props: Props) {
  const { items } = props;

  return (
    <>
      {items.map(({ link, text }) => (
        <a style={{ paddingRight: 20 }} title={text} href={link}>
          {text}
        </a>
      ))}
    </>
  );
}

export default memo(RestaurantMenuBottomLinksItem);
