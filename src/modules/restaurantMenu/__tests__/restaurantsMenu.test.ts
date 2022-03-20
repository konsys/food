import { RestaurantMenuModel, RestaurantModel } from '../../../store';
import { restaurantMenuFactory } from '../restaurantMenuFactory';

describe('menu tests', () => {
  const { createItemFx } = RestaurantMenuModel;
  const { getItemByFilterFx } = RestaurantModel;

  it('should create menu', async () => {
    for (let i = 0; i < 10; i++) {

      for (let i1 = 1; i1 < 11; i1++) {
        const restaurant = await getItemByFilterFx({ id: i1 })
        const item = restaurantMenuFactory.build({ restaurant, restaurantId: restaurant.id! });
        await createItemFx(item);
      }
    }
    expect(1).toBe(1);
  });
});
