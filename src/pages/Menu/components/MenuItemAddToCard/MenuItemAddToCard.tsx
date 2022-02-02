import * as React from 'react';
import './style.less';

interface IProps {
  component: React.ReactNode;
}

export function MenuItemAddToCard({ component }: IProps) {
  return <div className='menu-item-add-to-card'>
    <span>{component}</span>
  </div>
}
