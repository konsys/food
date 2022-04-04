import { FoodCategoryModel, ImageModel, RestaurantMenuModel, RestaurantModel } from '../../../store';
import { restaurantMenuFactory } from '../restaurantMenuFactory';

describe('restaurant tests', () => {
  const { createItemFx } = RestaurantMenuModel;
  const { getItemByFilterFx: getRestaurant } = RestaurantModel;
  const { getItemByFilterFx: getFoodCategory } = FoodCategoryModel;
  const { getItemByFilterFx: getImage } = ImageModel;

  it('should create restaurant', async () => {
    for (let i = 0; i < 10; i++) {

      for (let i1 = 1; i1 < 11; i1++) {
        const restaurant = await getRestaurant({});
        const foodCategory = await getFoodCategory({});
        const image = await getImage({});
        const item = restaurantMenuFactory.build({
          restaurant,
          restaurantUuid: restaurant.uuid,
          foodCategoryUuid: foodCategory.uuid,
          imageUuid: image.uuid
        });
        await createItemFx(item);
      }
    }
    expect(1).toBe(1);
  });
});
