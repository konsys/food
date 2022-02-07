import React, { memo } from 'react';
import './breadcrumbs.less';

interface Props {}

function Breadcrumbs(props: Props) {
  const {} = props;

  return (
    // <div className=' breadcrumbs-home-wrapper'>
    <div className='breadcrumbs'>
      <div className='container'>
        <ul className='list-clear'>
          <li>
            <a href='https://broniboy.ru' title='Главная'>
              <span>Главная</span>
            </a>
          </li>
          <li>
            <a href='/' title='Нижний Новгород' className='disabled'>
              <span>Нижний Новгород</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default memo(Breadcrumbs);