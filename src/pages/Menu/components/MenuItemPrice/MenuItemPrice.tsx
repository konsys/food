import * as React from 'react';
import './style.less';

interface IProps {
  text: number;
}

export function MenuItemPrice({ text }: IProps) {
  return <div className='menu-item-price'>{text} р.</div>
}
