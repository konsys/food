import { EDeliveryType, ERatingColor } from './types';
import * as factory from 'factory.ts';
import faker from 'faker';
import { RestaurantDto, EFoodType } from './types';

export const restaurantFactory = factory.Sync.makeFactory<RestaurantDto>({
  id: factory.each((n) => n),
  deliveryType: factory.each(() => EDeliveryType.LONG_DISTANCE),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),
  logoUrl: factory.each(
    () =>
      'https://images.broniboy.ru/oqImvIfl3bVYngw-tF7D5_uOBHI=/600x0/smart/filters:smart_sharpen():allow_webp(false)/own/16d30944-4433-4ac6-bc3a-e543ff2ea12a/1ce5e674124599cd6b922c19e8a2ef68.jpg'
  ),
  ratingColor: factory.each(() => ERatingColor.SUCCESS_COLOR),
  rating: factory.each(() => 5),
  priceRate: factory.each(() => 1),
  deliveryFullTime: factory.each(() => faker.commerce.productName()),
  foodType: factory.each(() => EFoodType.EUROPIAN),
  price: factory.each(() => faker.datatype.number(500)),
  description: factory.each(() => faker.commerce.productDescription()),
  imgId: factory.each((e) => e),
});
