import React, { memo } from 'react';
import { TLinkWithText } from '../../../common/types/utilTypes';
import RestaurantMenuBottomLinksItem from './components/RestaurantMenuBottomLinksItem';

interface Props {}

const items: TLinkWithText[] = [
  {
    link: '/',
    text: 'Обеды',
  },
  {
    link: '/',
    text: 'Салаты',
  },
  {
    link: '/',
    text: 'Основные блюда',
  },
  {
    link: '/',
    text: 'Стритфуд',
  },
  {
    link: '/',
    text: 'Супы',
  },
  {
    link: '/',
    text: 'Паста',
  },
  {
    link: '/',
    text: 'Десерты',
  },
  {
    link: '/',
    text: 'Завтраки',
  },
  {
    link: '/',
    text: 'Мясо',
  },
  {
    link: '/',
    text: 'Чизкейки',
  },
  {
    link: '/',
    text: 'Европейская кухня',
  },
];

function RestaurantMenuBottomLinks(props: Props) {
  const {} = props;

  return (
    <div>
      <RestaurantMenuBottomLinksItem items={items} />
    </div>
  );
}

export default memo(RestaurantMenuBottomLinks);
