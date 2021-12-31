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
  let items: MenuTypeDto[];
  let random: MenuTypeDto;

  beforeAll(async () => {
    item = menuTypeFactory.build();
    resetMenuType();
    resetMenuTypeList();
    items = await getAllMenuTypeFx();
    random = items[faker.datatype.number(items.length)];
  });

  afterAll(() => {
    $menuTypeOne.off(resetMenuType);
    $menuTypeList.off(resetMenuTypeList);
  });

  it('should create menu type', async () => {
    await createMenuTypeFx(item);

    // eslint-disable-next-line effector/no-getState
    expect($menuTypeOne.getState()).toStrictEqual(expect.objectContaining(item));
  });

  it('should get all menu type', async () => {
    await getAllMenuTypeFx();
    // eslint-disable-next-line effector/no-getState
    const { records } = $menuTypeList.getState();

    expect(Array.isArray(records)).toBeTruthy();
    const found = records.find((v) => v.name === item.name);
    expect(found).toBeTruthy();
  });

  it('should get one menu type', async () => {
    random.menuTypeId && (await getOneMenuTypeFx(random.menuTypeId));
    // eslint-disable-next-line effector/no-getState
    const one = $menuTypeOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(item));
  });

  it('should update menu type', async () => {
    const description = faker.datatype.uuid();
    random.menuTypeId && (await updateMenuTypeFx({ ...random, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuTypeOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu type', async () => {
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
