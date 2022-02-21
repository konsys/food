import faker from 'faker';
import { RestaurantMenuModel } from '../../../store';
import { restaurantMenuFactory } from '../restaurantMenuFactory';

describe('menu tests', () => {
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
  } = RestaurantMenuModel;

  const generateNewItem = () => restaurantMenuFactory.build();
  beforeAll(async () => {});

  beforeEach(() => {});

  afterAll(() => {
    $itemStore.off(resetOne);
    $listStore.off(resetList);
  });

  it('should create menu', async () => {
    const item = generateNewItem();
    // expect(item).toBe(1);
    for (let i = 0; i < 100; i++) {
      await Promise.all(new Array(20).fill(await createItemFx(item)));
    }

    expect(1).toBe(1);
  });

  it.skip('should create menu', async () => {
    await createItemFx(generateNewItem());
    // eslint-disable-next-line effector/no-getState
    expect($itemStore.getState()).toStrictEqual(expect.objectContaining(generateNewItem()));
  });

  it.skip('should get all menu', async () => {
    const limit = 2;
    getAll({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it.skip('should get one menu', async () => {
    await createItemFx(generateNewItem());
    const { item } = $itemStore.getState();
    item?.id && getItem(item.uuid);
    // eslint-disable-next-line effector/no-getState
    const two = $itemStore.getState();
    expect(item).toStrictEqual(expect.objectContaining(two.item));
  });

  it.skip('should update menu', async () => {
    await createItemFx(generateNewItem());
    let { item } = $itemStore.getState();

    const description = faker.datatype.uuid();
    item && (await updateItemFx({ ...item, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $itemStore.getState();
    expect(one.item?.description).toStrictEqual(description);
  });

  it.skip('should delete menu', async () => {
    await createItemFx(generateNewItem());
    const { item } = $itemStore.getState();
    item?.id && (await deleteItemFx(item.id));

    // eslint-disable-next-line effector/no-getState
    let one = $itemStore.getState();
    expect(one).toStrictEqual({ item: null, pending: false });
  });
});
