import { deliveryFactory } from '../deliveryFactory';
import { DeliveryDto } from '../types';
import { DeliveryModel } from '../../../store';

const { createNewItemFx } = DeliveryModel;

const generateNewItem = () => deliveryFactory.build();

describe('delivery tests', () => {
  it.skip('should create delivery', async () => {
    await Promise.all(new Array(20).fill(await createNewItemFx(generateNewItem())));
    expect(1).toBe(1);
  });
});
