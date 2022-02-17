import React, { memo, useEffect, useRef, useState } from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { TLinkWithText } from '../../../../common/types/utilTypes';
import TopNavigationSubMenu from './components/TopNavigationSubMenu';
import './restaurantMenuTopNavigation.less';

interface Props {
  menuItems: TLinkWithText[];
}

const MAX_ITEMS = 9;
const PXS_PER_ITEM = 160;

function RestaurantMenuTopNavigation(props: Props) {
  const { menuItems } = props;
  const ref = useRef<any>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [subMenuItems, setSubMenuItems] = useState<TLinkWithText[]>([]);
  const [mainMenuItems, setMainMenuItems] = useState<TLinkWithText[]>([]);
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

  useEffect(() => {
    let itemsNum = Math.ceil(document.body.clientWidth / PXS_PER_ITEM);
    itemsNum = itemsNum > MAX_ITEMS ? MAX_ITEMS : itemsNum;
    setMainMenuItems(menuItems.slice(0, itemsNum));
    setSubMenuItems(menuItems.slice(itemsNum, menuItems.length));
  }, []);

  return (
    <div className='restaurant-info-menu' ref={ref}>
      <ul className='restaurant-info-menu__list list-clear'>
        {mainMenuItems.map(({ text, link }, index) => (
          <li key={index}>
            <a href={text} title={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
      {subMenuItems.length ? (
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
      ) : (
        ''
      )}
      {isVisible && <TopNavigationSubMenu elements={subMenuItems} />}
    </div>
  );
}

export default memo(RestaurantMenuTopNavigation);
