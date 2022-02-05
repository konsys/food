import React from 'react';
import { ReactComponent as Geoposition } from '../../svg/geoposition.svg';

export const HeaderCity = () => (
  <div className='header-city'>
    <a href='/'>
      <Geoposition />
      <span className='header-city__name'>Нижний Новгород</span>
    </a>
  </div>
);
