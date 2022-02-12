import React, { memo, useEffect, useRef, useState } from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { TLinkWithText } from '../../../../common/types/utilTypes';
import TopNavigationSubMenu from './components/TopNavigationSubMenu';

interface Props {
  menuItems: TLinkWithText[];
}

function RestaurantMenuTopNavigation(props: Props) {
  const { menuItems } = props;
  const ref = useRef<any>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleSubMenu = () => setIsVisible(!isVisible);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isVisible && ref.current && !ref.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isVisible]);

  return (
    <div className='restaurant-info-menu' style={{ width: 'auto' }} ref={ref}>
      <ul className='restaurant-info-menu__list list-clear'>
        {menuItems.map(({ text, link }) => (
          <li>
            <a className='anchor_link' href={text} title={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
      <button
        type='button'
        className='restaurant-info-menu__item_more'
        style={{ display: 'inline-block' }}
        onClick={toggleSubMenu}
      >
        <div className='restaurant-info-menu__item_more_text'>
          Еще <DownOutlined />
        </div>
      </button>

      {isVisible && (
        <TopNavigationSubMenu
          elements={[
            {
              link: 'meet',
              text: 'Мясо',
            },
            {
              link: 'meet',
              text: 'Мясо',
            },
            {
              link: 'meet',
              text: 'Мясо',
            },
          ]}
        />
      )}
    </div>
  );
}

export default memo(RestaurantMenuTopNavigation);
