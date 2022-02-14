import React, { memo } from 'react';
import { TLinkWithText } from '../../../../../common/types/utilTypes';
import './restarauntMenuSubMenu.less';

interface Props {
  elements: TLinkWithText[];
}

function TopNavigationSubMenu(props: Props) {
  const { elements } = props;
  return (
    <ul className='restaurant-info-menu__submenu'>
      {elements.map(({ link, text }, index) => (
        <li key={index}>
          <a className='anchor_link' href={link} title={text}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default memo(TopNavigationSubMenu);
