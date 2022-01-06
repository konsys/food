import React from 'react';
import { Link } from 'react-router-dom';
import { MenuDto } from '../../model/types';
import './styles.scss';

interface Props {
  foodMenuItem: MenuDto;
}

export const MenuListItem = ({ foodMenuItem }: Props) => {
  return (
    <>
      <div className='col-lg-4 col-md-6'>
        <div className='gallery-single'>
          <h2>
            <Link to={`/menu/${foodMenuItem.id}`}>{foodMenuItem.name}</Link>
          </h2>
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
