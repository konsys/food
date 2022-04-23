import { ImageModel, LegalModel, RestaurantModel } from '../../../store';
import { restaurantFactory } from '../restaurantFactory';

const { createNewItemFx } = RestaurantModel;
const { getItemByFilterFx: getLegal } = LegalModel;
const { getItemByFilterFx: getImage } = ImageModel;

describe('restaurant tests', () => {
  it.skip('should create restaurant', async () => {
    const legal = await getLegal({});
    const image = await getImage({})
    for (let i = 0; i < 10; i++) {
      const item = restaurantFactory.build({
        imageUuid: image.uuid,
        legalUuid: legal.uuid,
        logoUuid: image.uuid,
      });
      await createNewItemFx(item);
    }

    expect(1).toBe(1);
  });
});
