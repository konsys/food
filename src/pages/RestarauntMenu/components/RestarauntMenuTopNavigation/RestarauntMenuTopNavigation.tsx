import React, { memo } from 'react';

interface Props {}

function RestarauntMenuTopNavigation(props: Props) {
  const {} = props;

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
      >
        <div className='restaurant-info-menu__item_more_text'>
          Еще
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
      <ul className='restaurant-info-menu__submenu' style={{ display: 'none' }}>
        <li>
          <a className='anchor_link' href='#myaso' title='Мясо'>
            Мясо
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#rebra' title='Ребра'>
            Ребра
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#burgery' title='Бургеры'>
            Бургеры
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#garniry' title='Гарниры'>
            Гарниры
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#sousy' title='Соусы'>
            Соусы
          </a>
        </li>
        <li>
          <a className='anchor_link' href='#deserty' title='Десерты'>
            Десерты
          </a>
        </li>
      </ul>
    </div>
  );
}

export default memo(RestarauntMenuTopNavigation);
