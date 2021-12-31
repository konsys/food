import faker from 'faker';
import { menuFactory } from '../menuFactory';
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
    item = menuFactory.build();
    resetMenu();
    resetMenuList();
    items = await getAllMenuFx();
    ramdomItem = items[faker.datatype.number(items.length)];
  });

  afterAll(() => {
    $menuOne.off(resetMenu);
    $menuList.off(resetMenuList);
  });

  it('should create menu', async () => {
    await createMenuFx(item);

    // eslint-disable-next-line effector/no-getState
    expect($menuOne.getState()).toBe(1);
    // eslint-disable-next-line effector/no-getState
    expect($menuOne.getState()).toStrictEqual(expect.objectContaining(item));
  });

  it('should get all menu', async () => {
    await getAllMenuFx();
    // eslint-disable-next-line effector/no-getState
    const { records } = $menuList.getState();

    expect(Array.isArray(records)).toBeTruthy();
    const found = records.find((v) => v.name === item.name);
    expect(found).toBeTruthy();
  });

  it.skip('should get one menu', async () => {
    ramdomItem?.menuId && (await getOneMenuFx(ramdomItem.menuId));
    // eslint-disable-next-line effector/no-getState
    const one = $menuOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(item));
  });

  it.skip('should update menu', async () => {
    const description = faker.datatype.uuid();
    ramdomItem && (await updateMenuFx({ ...ramdomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it.skip('should delete menu', async () => {
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
