
import { FoodCategoryModel, ImageModel, RestaurantMenuModel, RestaurantModel } from '../../../store';
import { restaurantMenuFactory } from '../restaurantMenuFactory';

describe('restaurant tests', () => {
  const { createItemFx, } = RestaurantMenuModel;
  const { getAllFx } = RestaurantModel;
  const { getItemByFilterFx: getFoodCategory } = FoodCategoryModel;
  const { getItemByFilterFx: getImage } = ImageModel;


  it('should create restaurant menu', async () => {
    const { items: restaurants } = await getAllFx({ limit: 100, page: 0 });

    if (restaurants) {
      for (let i = 0; i < restaurants.length; i++) {
        for (let i1 = 1; i1 < 5; i1++) {

          const foodCategory = await getFoodCategory({});
          const image = await getImage({});
          const item = restaurantMenuFactory.build({
            restaurant: restaurants[i],
            restaurantUuid: restaurants[i].uuid,
            foodCategoryUuid: foodCategory.uuid,
            imageUuid: image.uuid,
          });
          await createItemFx(item);
        }
      }
    }
    expect(1).toBe(1);
  });
});
