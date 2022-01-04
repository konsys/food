import React from 'react';
import { MenuDto } from '../../model/types';
import './styles.scss';

interface Props {
  foodMenuItem: MenuDto;
}

export const MenuItem = ({ foodMenuItem }: Props) => {
  return (
    <>
      <div className='col-lg-4 col-md-6'>
        <div className='gallery-single'>
          <h2>{foodMenuItem.name}</h2>
          <h4>&#8381; {foodMenuItem.price}</h4>
          <img src={foodMenuItem.averageImg} className='img-fluid' alt='' />
          <div className='why-text'>
            <p>{foodMenuItem.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
