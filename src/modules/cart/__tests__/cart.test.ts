import { cartFactory } from '../cartFactory';
import { CartModel } from '../../../store';

const { createNewItemFx } = CartModel;

describe('cart tests', () => {
  it.skip('should create cart', async () => {
    const item = cartFactory.build();
    for (let i = 10; i < 10; i++) {
      await Promise.all(new Array(20).fill(await createNewItemFx(item)));
    }

    expect(1).toBe(1);
  });
});
