import {
  $menuTypeOne,
  $menuTypeList,
  createMenuTypeFx,
  deleteMenuTypeFx,
  getAllMenuTypeFx,
  getOneMenuTypeFx,
  resetMenuType,
  resetMenuTypeList,
  updateMenuTypeFx,
} from '../menuTypeModel/store';
import faker from 'faker';
import { MenuTypeDto } from '../menuTypeModel/types';
import { menuTypeFactory } from '../menuTypeModel/menuTypeFactory';

describe('menu type test', () => {
  let item: MenuTypeDto;
  // let items: MenuTypeDto[];
  let random: MenuTypeDto;

  beforeAll(async () => {
    item = menuTypeFactory.build();
    resetMenuType();
    resetMenuTypeList();
    // items = (await getAllMenuTypeFx({ limit: 10, page: 1 })).items;
    // random = items[faker.datatype.number(items.length)];
  });

  afterAll(() => {
    $menuTypeOne.off(resetMenuType);
    $menuTypeList.off(resetMenuTypeList);
  });

  it.skip('should create menu type', async () => {
    await createMenuTypeFx(item);

    // eslint-disable-next-line effector/no-getState
    expect($menuTypeOne.getState()).toStrictEqual(expect.objectContaining(item));
  });

  it('should get limit menu type', async () => {
    const limit = 2;
    const page = 1;
    await getAllMenuTypeFx({
      limit,
      page,
    });
    // eslint-disable-next-line effector/no-getState
    const { items } = $menuTypeList.getState();

    expect(items).toBe(2);

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it.skip('should get all menu type', async () => {
    await getAllMenuTypeFx();
    // eslint-disable-next-line effector/no-getState
    const { items } = $menuTypeList.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items.length).toBeGreaterThan(0);
  });

  it.skip('should get one menu type', async () => {
    random.menuTypeId && (await getOneMenuTypeFx(random.menuTypeId));
    // eslint-disable-next-line effector/no-getState
    const one = $menuTypeOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(item));
  });

  it.skip('should update menu type', async () => {
    const description = faker.datatype.uuid();
    random.menuTypeId && (await updateMenuTypeFx({ ...random, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuTypeOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it.skip('should delete menu type', async () => {
    random.menuTypeId && (await deleteMenuTypeFx(random.menuTypeId));

    // eslint-disable-next-line effector/no-getState
    let one = $menuTypeOne.getState();
    expect(one).toBeNull();

    random.menuTypeId && (await getOneMenuTypeFx(random.menuTypeId));

    // eslint-disable-next-line effector/no-getState
    one = $menuTypeOne.getState();
    expect(one).toBeNull();
  });
});
