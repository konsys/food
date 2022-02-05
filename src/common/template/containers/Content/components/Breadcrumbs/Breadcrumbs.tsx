import React from 'react';
import './breadcrumbs.less';

export function Breadcrumbs() {
  return (
    <div className=' breadcrumbs-home-wrapper'>
      <div className='breadcrumbs'>
        <div className='container'>
          <ul className='list-clear'>
            <li data-actor='breadcrumbs-element' data-level={0}>
              <a href='https://broniboy.ru' title='Главная'>
                <span>Главная</span>
              </a>
            </li>
            <li data-actor='breadcrumbs-element-active' data-level={1}>
              <a href='/' title='Нижний Новгород' className='disabled'>
                <span>Нижний Новгород</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
