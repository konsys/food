import faker from 'faker';
import { menuFactory } from '../menuFactory';
import { getAllMenuTimeFx } from '../menuTimeModel/store';
import { getAllMenuTypeFx } from '../menuTypeModel/store';
import {
  resetMenu,
  resetMenuList,
  getAllMenuFx,
  $menuOne,
  $menuList,
  createMenuFx,
  getOneMenuFx,
  updateMenuFx,
  deleteMenuFx,
} from '../store';
import { MenuDto } from '../types';

const generateNewItem = async () => {
  resetMenu();
  resetMenuList();
  const menuTime = await getAllMenuTimeFx({ limit: 5, page: 1 });
  const menuType = await getAllMenuTypeFx({ limit: 5, page: 1 });
  let newItem = menuFactory.build();

  newItem = {
    ...newItem,
    menuTime: menuTime.items[faker.datatype.number(menuTime.items.length)],
    menuType: menuType.items[faker.datatype.number(menuType.items.length)],
  };
  return newItem;
}

describe('menu tests', () => {
  let newItem: MenuDto;
  let allItems: MenuDto[];
  let ramdomItem: MenuDto;

  beforeEach(async () => {
    resetMenu();
    resetMenuList();
    newItem = await generateNewItem();
    allItems = (await getAllMenuFx({ limit: 10, page: 1 })).items;
    ramdomItem = allItems[faker.datatype.number(allItems.length)];
  });

  afterAll(() => {
    $menuOne.off(resetMenu);
    $menuList.off(resetMenuList);
  });

  it('should create menu', async () => {
    await createMenuFx(newItem);

    // eslint-disable-next-line effector/no-getState
    expect($menuOne.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it('should get all menu', async () => {
    const limit = 2;
    await getAllMenuFx({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $menuList.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get one menu', async () => {
    await createMenuFx(newItem);
    const one = $menuOne.getState();
    one?.menuId && (await getOneMenuFx(one.menuId));
    // eslint-disable-next-line effector/no-getState
    const two = $menuOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(two));
  });

  it('should update menu', async () => {
    await createMenuFx(newItem);
    let one = $menuOne.getState();

    const description = faker.datatype.uuid();
    one && (await updateMenuFx({ ...one, description }));

    // eslint-disable-next-line effector/no-getState
    one = $menuOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu', async () => {
    await createMenuFx(newItem);
    const item = $menuOne.getState();
    item?.menuId && (await deleteMenuFx(item.menuId));

    // eslint-disable-next-line effector/no-getState
    let one = $menuOne.getState();
    expect(one).toBeNull();

    item?.menuId && (await getOneMenuFx(item.menuId));

    // eslint-disable-next-line effector/no-getState
    one = $menuOne.getState();
    expect(one).toBeNull();
  });
});
