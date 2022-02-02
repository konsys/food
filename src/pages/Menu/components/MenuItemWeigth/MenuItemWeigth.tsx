import * as React from 'react';
import './style.less';

interface IProps {
  text: number;
}

export function MenuItemWeigth({ text }: IProps) {
  return <div className='menu-item-weight'>{text} г.</div>
}
