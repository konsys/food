import { Button } from 'antd';
import React from 'react';

export const MenuHeader = () => {
  return (
    <>
      <div className='row'>
        <Button type='primary'>Создать</Button>
        <div className='col-lg-12'>
          <div className='heading-title text-center'>
            <h2>Special Menu</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          </div>
        </div>
      </div>
    </>
  );
};
