import React, { memo, useState } from 'react';
import TopNavigationSubMenu from './components/TopNavigationSubMenu';

interface Props {}

function RestarauntMenuTopNavigation(props: Props) {
  const {} = props;

  const toggleSubMenu = () => setIsVisible(!isVisible);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className='restaurant-info-menu' style={{ width: 'auto' }}>
      <ul className='restaurant-info-menu__list list-clear'>
        <li>
          <a className='anchor_link' href='#sushi' title='Суши'>
            Суши
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#rolly' title='Роллы'>
            Роллы
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#gunkany' title='Гунканы'>
            Гунканы
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#big-sayz' title='Биг сайз'>
            Биг сайз
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#poke' title='Поке'>
            Поке
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#startery' title='Стартеры'>
            Стартеры
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#salaty' title='Салаты'>
            Салаты
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#supy' title='Супы'>
            Супы
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#pasta' title='Паста'>
            Паста
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#ryba-i-ptica' title='Рыба и птица'>
            Рыба и птица
          </a>
        </li>
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
      {isVisible && <TopNavigationSubMenu />}
    </div>
  );
}

export default memo(RestarauntMenuTopNavigation);
