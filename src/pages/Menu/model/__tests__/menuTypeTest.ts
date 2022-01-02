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
  let newItem: MenuTypeDto;
  let allItems: MenuTypeDto[];
  let randomItem: MenuTypeDto;

  beforeAll(async () => {
    newItem = menuTypeFactory.build();
    resetMenuType();
    resetMenuTypeList();
    allItems = (await getAllMenuTypeFx({ limit: 10, page: 1 })).items;
    randomItem = allItems[faker.datatype.number(allItems.length)];
  });

  afterAll(() => {
    $menuTypeOne.off(resetMenuType);
    $menuTypeList.off(resetMenuTypeList);
  });

  it('should create menu type', async () => {
    await createMenuTypeFx(newItem);

    // eslint-disable-next-line effector/no-getState
    expect($menuTypeOne.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it('should get limit menu type', async () => {
    const limit = 7;
    const page = 1;
    await getAllMenuTypeFx({
      limit,
      page,
    });
    // eslint-disable-next-line effector/no-getState
    const { items } = $menuTypeList.getState();
    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get all menu type', async () => {
    const limit = 4;
    await getAllMenuTypeFx({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $menuTypeList.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get one menu type', async () => {
    randomItem.menuTypeId && (await getOneMenuTypeFx(randomItem.menuTypeId));
    // eslint-disable-next-line effector/no-getState
    const item = $menuTypeOne.getState();
    expect(item).toStrictEqual(expect.objectContaining(randomItem));
  });

  it('should update menu type', async () => {
    const description = faker.datatype.uuid();
    randomItem.menuTypeId && (await updateMenuTypeFx({ ...randomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuTypeOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu type', async () => {
    randomItem.menuTypeId && (await deleteMenuTypeFx(randomItem.menuTypeId));

    // eslint-disable-next-line effector/no-getState
    let one = $menuTypeOne.getState();    
    expect(one).toBeNull();

    randomItem.menuTypeId && (await getOneMenuTypeFx(randomItem.menuTypeId));

    // eslint-disable-next-line effector/no-getState
    one = $menuTypeOne.getState();
    expect(one).toBeNull();
  });
});
