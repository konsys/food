import * as React from 'react';
import './style.less';

interface IProps {
  text: string;
}

export function MenuItemDescription({ text }: IProps) {
  return <div className='menu-item-description'>{text}</div>
}
