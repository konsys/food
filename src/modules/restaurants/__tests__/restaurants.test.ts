import { RestaurantModel } from '../../../store';
import { restaurantFactory } from '../restaurantFactory';

const { createItemFx } = RestaurantModel;


describe('menu tests', () => {
  it('should create menu', async () => {
    for (let i = 0; i < 10; i++) {
      const item = restaurantFactory.build();
      await createItemFx(item);
      expect(item).toBe(1);

    }

    expect(1).toBe(1);
  });
});
