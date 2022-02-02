import * as React from 'react';
import './style.less';

interface IProps {
  text: string;
}

export function MenuItemTitle({ text }: IProps) {
  return <div className='menu-item-title'>{text}</div>
}
