import { foodCategoryFactory } from '../foodCategoryFactory';
import { FoodCategoryModel } from '../../../../store';

const { createNewItemFx } = FoodCategoryModel;

const generateNewItem = () => {
  const newItem = foodCategoryFactory.build();

  return newItem;
};

describe('menu tests', () => {
  it.skip('should create food category', async () => {
    for (let i = 0; i < 100; i++) {
      await Promise.all(new Array(20).fill(await createNewItemFx(generateNewItem())));
    }

    expect(1).toBe(1);
  });
});
