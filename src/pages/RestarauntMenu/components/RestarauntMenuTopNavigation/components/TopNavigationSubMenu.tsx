import React, { memo } from 'react';

interface Props {}

function TopNavigationSubMenu(props: Props) {
  const {} = props;
  return (
    <ul className='restaurant-info-menu__submenu' style={{ display: 'block' }}>
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
  );
}

export default memo(TopNavigationSubMenu);
