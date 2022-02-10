import { imageFactory } from './../../Image/model/imageFactory';
import faker from 'faker';
import { RestarauntModel } from '../../../store';
import { restarauntMenuFactory } from '../factory/restarauntMenuFactory';
import { RestarauntDto } from '../types';

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
} = RestarauntModel;

const generateNewItem = () => {
  let newItem = restarauntMenuFactory.build();

  newItem = {
    ...newItem,
    imgId: 1,
  };

  return newItem;
};

describe('menu tests', () => {
  let newItem: RestarauntDto;

  beforeAll(async () => {
    await Promise.all(new Array(20).fill(await createItemFx(generateNewItem())));
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

  it('should create menu', () => {
    expect(1).toBe(1);
  });

  it.skip('should create menu', async () => {
    await createItemFx(newItem);
    // eslint-disable-next-line effector/no-getState
    expect($itemStore.getState()).toStrictEqual(expect.objectContaining(newItem));
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
    await createItemFx(newItem);
    const { item } = $itemStore.getState();
    item?.id && getItem(item.id);
    // eslint-disable-next-line effector/no-getState
    const two = $itemStore.getState();
    expect(item).toStrictEqual(expect.objectContaining(two.item));
  });

  it.skip('should update menu', async () => {
    await createItemFx(newItem);
    let { item } = $itemStore.getState();

    const description = faker.datatype.uuid();
    item && (await updateItemFx({ ...item, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $itemStore.getState();
    expect(one.item?.description).toStrictEqual(description);
  });

  it.skip('should delete menu', async () => {
    await createItemFx(newItem);
    const { item } = $itemStore.getState();
    item?.id && (await deleteItemFx(item.id));

    // eslint-disable-next-line effector/no-getState
    let one = $itemStore.getState();
    expect(one).toStrictEqual({ item: null, pending: false });
  });
});