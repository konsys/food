import React, { memo } from 'react';

interface Props {}

function Breadcrumbs(props: Props) {
  const {} = props;

  return (
    // TODO add for main page
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
