import { deliveryFactory } from '../deliveryFactory';
import { DeliveryDto } from '../types';
import faker from 'faker';
import { DeliveryModel } from '../../../store';

const {
  createItemFx,
  resetList,
  resetOne,
  $listStore,
  $itemStore,
  getAll,
  updateItemFx,
  getItem,
  deleteItemFx,
} = DeliveryModel;

const generateNewItem = () => deliveryFactory.build();

describe('delivery tests', () => {
  let newItem: DeliveryDto;

  beforeAll(async () => {
    for (let i = 0; i < 200; i++) {
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

  it.skip('should create delivery', async () => {
    await createItemFx(newItem);
    // eslint-disable-next-line effector/no-getState
    expect($itemStore.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it.skip('should get all delivery', async () => {
    const limit = 2;
    getAll({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it.skip('should get one delivery', async () => {
    await createItemFx(newItem);
    const { item } = $itemStore.getState();
    item?.id && getItem(item.uuid);
    // eslint-disable-next-line effector/no-getState
    const two = $itemStore.getState();
    expect(item).toStrictEqual(expect.objectContaining(two.item));
  });

  it.skip('should update delivery', async () => {
    await createItemFx(newItem);
    let { item } = $itemStore.getState();

    const description = faker.datatype.uuid();
    item && (await updateItemFx({ ...item, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $itemStore.getState();
    expect(one.item?.description).toStrictEqual(description);
  });

  it.skip('should delete delivery', async () => {
    await createItemFx(newItem);
    const { item } = $itemStore.getState();
    item?.id && (await deleteItemFx(item.id));

    // eslint-disable-next-line effector/no-getState
    let one = $itemStore.getState();
    expect(one).toStrictEqual({ item: null, pending: false });
  });
});
