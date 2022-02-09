import React, { memo } from 'react';
import { TLinkWithText } from '../../../common/types/utilTypes';
import RestarauntMenuBottomLinksItem from './components/RestarauntMenuBottomLinksItem';

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

function RestarauntMenuBottomLinks(props: Props) {
  const {} = props;

  return (
    <div>
      <RestarauntMenuBottomLinksItem items={items} />
    </div>
  );
}

export default memo(RestarauntMenuBottomLinks);
