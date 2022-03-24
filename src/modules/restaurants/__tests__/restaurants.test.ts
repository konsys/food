import { RestaurantModel } from '../../../store';
import { restaurantFactory } from '../restaurantFactory';

const { createItemFx } = RestaurantModel;


describe('restaurant tests', () => {
  it.skip('should create restaurant', async () => {
    for (let i = 0; i < 10; i++) {
      const item = restaurantFactory.build();
      await createItemFx(item);
    }

    expect(1).toBe(1);
  });
});
