import { RestaurantModel } from '../../../store';
import { restaurantFactory } from '../restaurantFactory';

const { createItemFx } = RestaurantModel;

const generateNewItem = () => restaurantFactory.build();

describe('menu tests', () => {
  it('should create menu', async () => {
    for (let i = 0; i < 10; i++) {
      const item = generateNewItem();
      expect(item).toBe(1);
      await Promise.all(new Array(10).fill(await createItemFx(item)));
    }

    expect(1).toBe(1);
  });
});
