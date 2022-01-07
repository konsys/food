import faker from 'faker';
import { MenuTypeDto } from '../menuTypeModel/types';
import { menuTypeFactory } from '../menuTypeModel/menuTypeFactory';
import { createCrudStore } from '../../../../common/models/abstractModel/abstractCrudModel';

const {
  createFx,
  resetList,
  resetOne,
  $listStore,
  $oneStore,
  getAllFx,
  updateFx,
  getOneFx,
  deleteFx,
} = createCrudStore<MenuTypeDto>('/menu-type');

describe('menu type test', () => {
  let newItem: MenuTypeDto;
  let allItems: MenuTypeDto[];
  let randomItem: MenuTypeDto;

  beforeAll(async () => {
    for (let i = 0; i < 20; i++) {
      newItem = menuTypeFactory.build();
      await createFx(newItem);
    }
  });

  beforeEach(async () => {
    newItem = menuTypeFactory.build();
    resetOne();
    resetList();
    allItems = (await getAllFx({ limit: 40, page: 1 })).items;
    randomItem = allItems[faker.datatype.number(allItems.length)];
  });

  afterAll(() => {
    $oneStore.off(resetOne);
    $listStore.off(resetList);
  });

  it('should create menu type', async () => {
    await createFx(newItem);

    // eslint-disable-next-line effector/no-getState
    expect($oneStore.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it.skip('should get limit menu type', async () => {
    const limit = 7;
    const page = 1;
    await getAllFx({
      limit,
      page,
    });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();
    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it.skip('should get all menu type', async () => {
    const limit = 4;
    await getAllFx({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it.skip('should get one menu type', async () => {
    randomItem.menuTypeId && (await getOneFx(randomItem.menuTypeId));
    // eslint-disable-next-line effector/no-getState
    const item = $oneStore.getState();
    expect(item).toStrictEqual(expect.objectContaining(randomItem));
  });

  it.skip('should update menu type', async () => {
    const description = faker.datatype.uuid();
    randomItem.menuTypeId && (await updateFx({ ...randomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $oneStore.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it.skip('should delete menu type', async () => {
    await createFx(newItem);
    const item = $oneStore.getState();
    item?.menuTypeId && (await deleteFx(item.menuTypeId));

    // eslint-disable-next-line effector/no-getState
    let one = $oneStore.getState();
    expect(one).toBeNull();

    item?.menuTypeId && (await getOneFx(item.menuTypeId));

    // eslint-disable-next-line effector/no-getState
    one = $oneStore.getState();
    expect(one).toBeNull();
  });
});
