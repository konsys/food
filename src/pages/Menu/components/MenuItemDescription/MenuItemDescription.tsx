import * as React from 'react';
import './style.less';

interface IProps {
  text: string;
}

export const MenuItemDescription = ({ text }: IProps) => (
  <div className='menu-item-description'>{text} р.</div>
);
