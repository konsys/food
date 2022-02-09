import React, { memo, useEffect, useRef, useState } from 'react';
import { TLinkWithText } from '../../../../common/types/utilTypes';
import TopNavigationSubMenu from './components/TopNavigationSubMenu';

interface Props {
  menuItems: TLinkWithText[];
}

function RestarauntMenuTopNavigation(props: Props) {
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
          Еще{' '}
          <svg
            width={12}
            height={7}
            viewBox='0 0 12 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 1L6 6L11 1' stroke='black' />
          </svg>
        </div>
      </button>
      {!isVisible && (
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

export default memo(RestarauntMenuTopNavigation);
