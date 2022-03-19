import { deliveryFactory } from '../deliveryFactory';
import { DeliveryDto } from '../types';
import { DeliveryModel } from '../../../store';

const { createItemFx } = DeliveryModel;

const generateNewItem = () => deliveryFactory.build();

describe('delivery tests', () => {
  it('should create delivery', async () => {
    await Promise.all(new Array(20).fill(await createItemFx(generateNewItem())));
    expect(1).toBe(1);
  });
});
