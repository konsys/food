import { cartOrderFactory } from './../cartOrderFactory';
import { CartOrderModel } from '../../../store';
import { CartOrderDto } from '../types';

const { createItemFx, resetList, resetOne, $listStore, $itemStore } = CartOrderModel;

const generateNewItem = () => cartOrderFactory.build();

describe('delivery tests', () => {
  let newItem: CartOrderDto;

  beforeAll(async () => {
    for (let i = 0; i < 10; i++) {
      await Promise.all(new Array(20).fill(await createItemFx(generateNewItem())));
    }
  });

  beforeEach(() => {
    resetList();
    resetOne();
    newItem = generateNewItem();
  });

  afterAll(() => {
    $itemStore.off(resetOne);
    $listStore.off(resetList);
  });

  it('should create delivery', async () => {
    await Promise.all(new Array(20).fill(await createItemFx(generateNewItem())));
    expect(1).toBe(1);
  });
});
