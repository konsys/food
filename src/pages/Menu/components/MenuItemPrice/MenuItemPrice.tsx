import * as React from 'react';
import './style.less';

interface IProps {
  text: number;
}

export const MenuItemPrice = ({ text }: IProps) => <div className='menu-item-price'>{text} р.</div>;
