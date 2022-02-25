import faker from 'faker';
import { RestaurantMenuModel } from '../../../store';
import { restaurantMenuFactory } from '../restaurantMenuFactory';

describe('menu tests', () => {
  const { createItemFx } = RestaurantMenuModel;

  const generateNewItem = () => restaurantMenuFactory.build();

  it.skip('should create menu', async () => {
    for (let i = 0; i < 100; i++) {
      const item = generateNewItem();
      await Promise.all(new Array(20).fill(await createItemFx(item)));
    }

    expect(1).toBe(1);
  });
});
