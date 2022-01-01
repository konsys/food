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

describe('menu tests', () => {
  let item: MenuDto;
  let items: MenuDto[];
  let ramdomItem: MenuDto;

  beforeAll(async () => {
    const menuTime = await getAllMenuTimeFx();
    const menuType = await getAllMenuTypeFx();
    item = menuFactory.build();

    item = {
      ...item,
      menuTime: menuTime.items[faker.datatype.number(menuTime.items.length)],
      menuType: menuType.items[faker.datatype.number(menuType.items.length)],
    };
    resetMenu();
    resetMenuList();
    items = (await getAllMenuFx()).items;
    ramdomItem = items[faker.datatype.number(items.length)];
  });

  afterAll(() => {
    $menuOne.off(resetMenu);
    $menuList.off(resetMenuList);
  });

  it('should create menu', async () => {
    await createMenuFx(item);

    // eslint-disable-next-line effector/no-getState
    expect($menuOne.getState()).toStrictEqual(expect.objectContaining(item));
  });

  it('should get all menu', async () => {
    await getAllMenuFx();
    // eslint-disable-next-line effector/no-getState
    const { items } = $menuList.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items.length).toBeGreaterThan(0);
  });

  it('should get one menu', async () => {
    ramdomItem?.menuId && (await getOneMenuFx(ramdomItem.menuId));
    // eslint-disable-next-line effector/no-getState
    const one = $menuOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(item));
  });

  it('should update menu', async () => {
    const description = faker.datatype.uuid();
    ramdomItem && (await updateMenuFx({ ...ramdomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu', async () => {
    ramdomItem.menuId && (await deleteMenuFx(ramdomItem.menuId));

    // eslint-disable-next-line effector/no-getState
    let one = $menuOne.getState();
    expect(one).toBeNull();

    ramdomItem.menuId && (await getOneMenuFx(ramdomItem.menuId));

    // eslint-disable-next-line effector/no-getState
    one = $menuOne.getState();
    expect(one).toBeNull();
  });
});
