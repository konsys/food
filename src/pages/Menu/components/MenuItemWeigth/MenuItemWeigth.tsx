import * as React from 'react';
import './style.less';

interface IProps {
  text: number;
}

export const MenuItemWeigth = ({ text }: IProps) => (
  <div className='menu-item-weight'>{text} г.</div>
);
