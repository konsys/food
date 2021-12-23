import React from 'react';

export const FoodMenuLinks = () => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='special-menu text-center'>
            <div className='button-group filter-button-group'>
              <button className='active' data-filter='*'>
                All
              </button>
              <button data-filter='*'>Drinks</button>
              <button data-filter='.lunch'>Lunch</button>
              <button data-filter='.dinner'>Dinner</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
