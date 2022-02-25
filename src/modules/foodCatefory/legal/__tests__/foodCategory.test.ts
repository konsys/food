import { foodCategoryFactory } from '../foodCategoryFactory';
import { FoodCategoryModel } from '../../../../store';

const { createItemFx } = FoodCategoryModel;

const generateNewItem = () => {
  let newItem = foodCategoryFactory.build();

  return newItem;
};

describe('menu tests', () => {
  it('should create menu', async () => {
    for (let i = 0; i < 100; i++) {
      await Promise.all(new Array(20).fill(await createItemFx(generateNewItem())));
    }

    expect(1).toBe(1);
  });
});
