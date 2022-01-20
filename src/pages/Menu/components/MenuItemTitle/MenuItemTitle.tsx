import * as React from 'react';
import './style.less';

interface IProps {
  text: string;
}

export const MenuItemTitle = ({ text }: IProps) => <div className='menu-item-title'>{text}</div>;
