import faker from 'faker';
import { CrudStore } from '../../../../common/models/abstractModel/abstractCrudModel';
import { menuFactory } from '../menuFactory';
import { getAllMenuTimeFx } from '../menuTimeModel/store';
import { getAllMenuTypeFx } from '../menuTypeModel/store';

import { MenuDto } from '../types';

const model = new CrudStore<MenuDto>('/menu');

const {
  createFx,
  resetList,
  resetOne,
  $listStore,
  $itemStore,
  getAllFx,
  updateFx,
  getOneFx,
  deleteFx,
} = model.createCrudStore();

const generateNewItem = async () => {
  const menuTime = await getAllMenuTimeFx({ limit: 5, page: 1 });
  const menuType = await getAllMenuTypeFx({ limit: 5, page: 1 });
  let newItem = menuFactory.build();

  newItem = {
    ...newItem,
    menuTime: menuTime.items[faker.datatype.number(menuTime.items.length)],
    menuType: menuType.items[faker.datatype.number(menuType.items.length)],
  };

  return newItem;
};

describe('menu tests', () => {
  let newItem: MenuDto;

  beforeAll(async () => {
    for (let i = 0; i < 20; i++) {
      newItem = await generateNewItem();
      await createFx(newItem);
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
    await createFx(newItem);
    // eslint-disable-next-line effector/no-getState
    expect($itemStore.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it('should get all menu', async () => {
    const limit = 2;
    await getAllFx({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get one menu', async () => {
    await createFx(newItem);
    const one = $itemStore.getState();
    one?.id && (await getOneFx(one.id));
    // eslint-disable-next-line effector/no-getState
    const two = $itemStore.getState();
    expect(one).toStrictEqual(expect.objectContaining(two));
  });

  it('should update menu', async () => {
    await createFx(newItem);
    let one = $itemStore.getState();

    const description = faker.datatype.uuid();
    one && (await updateFx({ ...one, description }));

    // eslint-disable-next-line effector/no-getState
    one = $itemStore.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu', async () => {
    await createFx(newItem);
    const item = $itemStore.getState();
    item?.id && (await deleteFx(item.id));

    // eslint-disable-next-line effector/no-getState
    let one = $itemStore.getState();
    expect(one).toBeNull();

    item?.id && (await getOneFx(item.id));

    // eslint-disable-next-line effector/no-getState
    one = $itemStore.getState();
    expect(one).toBeNull();
  });
});
