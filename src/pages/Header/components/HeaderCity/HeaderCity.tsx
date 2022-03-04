import React from 'react';
import { ReactComponent as Geoposition } from '../../svg/geoposition.svg';
import './headerCity.less';

export const HeaderCity = () => (
  <div className='d-none d-md-flex header-city'>
    <a href='/'>
      <Geoposition style={{ width: 15 }} />
      <span className='header-city__name'>Нижний Новгород</span>
    </a>
  </div>
);
