import React from 'react';
import { EFoodType } from '..';

interface Props {
  menuType: EFoodType;
}

export const MenuLinks = ({ menuType }: Props) => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='special-menu text-center'>
            <div className='button-group filter-button-group'>
              <button className={menuType === EFoodType.ALL ? 'active' : ''}>All</button>
              <button className={menuType === EFoodType.DRINKS ? 'active' : ''}>Drinks</button>
              <button className={menuType === EFoodType.SALADS ? 'active' : ''}>Salads</button>
              <button className={menuType === EFoodType.HOT ? 'active' : ''}>Hot</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
