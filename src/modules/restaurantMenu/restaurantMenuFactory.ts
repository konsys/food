import { imageFactory } from './../image/model/imageFactory';
import * as factory from 'factory.ts';
import faker from 'faker';
import { RestarauntMenuDto } from './types';

export const restaurantMenuFactory = factory.Sync.makeFactory<RestarauntMenuDto>({
  id: factory.each((n) => n),
  name: factory.each(() => faker.commerce.productName()),
  uuid: factory.each(() => faker.datatype.uuid()),

  rating: factory.each(() => 5),
  description: factory.each(() => faker.commerce.productDescription()),
  closeTime: factory.each(() => faker.datatype.datetime()),
  deliveryPrice: factory.each(() => faker.datatype.number(1000)),

  restaurantImg: factory.each(() => imageFactory.build()),
  deliveryRange: factory.each(() => faker.datatype.number(1000)),
  maxDeliveryMinutes: factory.each(() => faker.datatype.number(1000)),
  minDeliveryMinutes: factory.each(() => faker.datatype.number(1000)),
  menuItems: factory.each(() => []),
  restaurantPartnerAddress: factory.each(() => faker.address.cityName()),
  restaurantPartnerLegal: factory.each(() => faker.company.companyName()),
  restaurantPartnerInn: factory.each(() => faker.finance.currencyCode()),
  restaurantPartnerKPP: factory.each(() => faker.finance.bic()),
  restaurantPartnerOGRN: factory.each(() => faker.finance.bic()),
  openTime: factory.each(() => faker.datatype.datetime()),
  priceRating: factory.each(() => 5),
});
