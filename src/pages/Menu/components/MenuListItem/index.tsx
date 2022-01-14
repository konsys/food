import { Button } from 'antd';
import React from 'react';
import { MenuDto } from '../../model/types';
import './styles.less';

interface Props {
  foodMenuItem: MenuDto;
}

export const MenuListItem = ({ foodMenuItem }: Props) => {
  return (
    <>
      <div className='col-lg-4 col-md-6'>
        <div className='gallery-single'>
          <div className='row'>
            <div className='col-sm-9'>
              <h2>{foodMenuItem.name}</h2>
            </div>
            <div className='col-sm-3 order-price'>
              <span>{foodMenuItem.price}</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 order-button'>
              <Button type='ghost'>Заказать</Button>
            </div>
          </div>
          <img src={foodMenuItem.image.averageImg ?? ''} className='img-fluid' alt='' />
          <div className='why-text'>
            <p>{foodMenuItem.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
