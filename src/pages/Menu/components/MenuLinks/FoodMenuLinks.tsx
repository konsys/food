import React from 'react';
import { TVoidFn } from '../../../../common/types';
import { EFoodType } from '../../MenuListPage';

interface Props {
  setActiveFilter: TVoidFn<EFoodType>;
  activeFilter: EFoodType;
}

export const MenuLinks = ({ activeFilter, setActiveFilter }: Props) => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='special-menu text-center'>
            <div className='button-group filter-button-group'>
              <button
                className={activeFilter === EFoodType.ALL ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.ALL)}
              >
                All
              </button>
              <button
                className={activeFilter === EFoodType.DRINKS ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.DRINKS)}
              >
                Drinks
              </button>
              <button
                className={activeFilter === EFoodType.SALADS ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.SALADS)}
              >
                Salads
              </button>
              <button
                className={activeFilter === EFoodType.HOT ? 'active' : ''}
                onClick={() => setActiveFilter(EFoodType.HOT)}
              >
                Hot
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
