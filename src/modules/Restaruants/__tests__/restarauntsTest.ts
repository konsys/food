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

const generateNewItem = async () => {
  let newItem = restarauntMenuFactory.build();

  newItem = {
    ...newItem,
    img: imageFactory.build(),
  };

  return newItem;
};

describe('menu tests', () => {
  let newItem: RestarauntDto;

  beforeAll(async () => {
    for (let i = 0; i < 20; i++) {
      newItem = await generateNewItem();
      await createItemFx(newItem);
    }
  });

  beforeEach(async () => {
    resetList();
    resetOne();
    newItem = await generateNewItem();
  });

  afterAll(() => {
    $itemStore.off(resetOne);
    $listStore.off(resetList);
  });

  it('should create menu', async () => {
    await createItemFx(newItem);
    // eslint-disable-next-line effector/no-getState
    expect($itemStore.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it('should get all menu', async () => {
    const limit = 2;
    getAll({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get one menu', async () => {
    await createItemFx(newItem);
    const { item } = $itemStore.getState();
    item?.id && getItem(item.id);
    // eslint-disable-next-line effector/no-getState
    const two = $itemStore.getState();
    expect(item).toStrictEqual(expect.objectContaining(two));
  });

  it('should update menu', async () => {
    await createItemFx(newItem);
    let { item } = $itemStore.getState();

    const description = faker.datatype.uuid();
    item && (await updateItemFx({ ...item, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $itemStore.getState();
    expect(one.item?.description).toStrictEqual(description);
  });

  it('should delete menu', async () => {
    await createItemFx(newItem);
    const { item } = $itemStore.getState();
    item?.id && (await deleteItemFx(item.id));

    // eslint-disable-next-line effector/no-getState
    let one = $itemStore.getState();
    expect(one).toBeNull();

    item?.id && getItem(item.id);

    // eslint-disable-next-line effector/no-getState
    one = $itemStore.getState();
    expect(one).toBeNull();
  });
});
