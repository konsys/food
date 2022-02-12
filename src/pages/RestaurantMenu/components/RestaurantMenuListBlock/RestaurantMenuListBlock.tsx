import React, { memo } from 'react';
import { MenuListDto } from '../../../../common/types/dto';
import RestaurantMenuListItem from './components/RestaurantMenuListItem';

const menuListItem: MenuListDto[] = [
  {
    description:
      'Копченный угорь на бруске японского риса, подается с имбирем и японской горчицей васаби.',
    imgSrc:
      'https://images.broniboy.ru/LPlfwRd2ZLCoWLMAOhDWjAJuwH8=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/25037303-414e-452c-9705-6a36d1e52007/da4c584debd0257437bbb65c19809c00.jpg',
    name: 'Угорь',
    price: 240,
    amount: 2,
  },
  {
    description:
      'Свежий тунец на бруске японского риса, подается с имбирем и японской горчицей васаби.',
    imgSrc:
      'https://images.broniboy.ru/5P-VqUfzMiTgxG6vK-vFATj33NA=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/815b3d9f-5cda-4f50-ad57-10b943fa2209/9984dd808ec446b65332025e2d4a1293.jpg',
    name: 'Тунец',
    price: 240,
    amount: 2,
  },
  {
    description: 'Лосось слабосоленый, хашбраун, сметана, петрушка.',
    imgSrc:
      'https://images.broniboy.ru/NEv9XUEbPw0RJkAd-vyBtznimsg=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/54ede9d2-7d8a-4a73-bb80-7d37f3a16e52/45b439d7ef86ad505f58cc3ac2f45042.jpg',
    name: 'Хашбраун с лососем',
    price: 310,
    weight: 180,
  },
];
interface Props {}

function RestaurantMenuListBlock(props: Props) {
  const {} = props;

  return (
    <>
      <div className='section-title'>
        <h2>Суши</h2>
      </div>
      <div className='service-list row'>
        {menuListItem.map(({ description, imgSrc, name, price, amount, weight }, index) => (
          <RestaurantMenuListItem
            description={description}
            imgSrc={imgSrc}
            name={name}
            price={price}
            amount={amount}
            weight={weight}
            key={index}
          />
        ))}
      </div>
      <div className='service-list' />
    </>
  );
}

export default memo(RestaurantMenuListBlock);
