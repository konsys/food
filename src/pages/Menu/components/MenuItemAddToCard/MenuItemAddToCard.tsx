import { Button } from 'antd';
import * as React from 'react';
import './style.less';

interface IProps {
  component: React.ReactNode;
}

export const MenuItemAddToCard = ({ component }: IProps) => (
  <div className='menu-item-add-to-card'>
    <Button type='link'>{component}</Button>
  </div>
);
