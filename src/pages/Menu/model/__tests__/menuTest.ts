import faker, { random } from 'faker';
import { menuFactory } from '../menuFactory';
import {
  resetMenuTime,
  resetMenuTimeList,
  getAllMenuTimeFx,
  $menuTimeOne,
  $menuTimeList,
  createMenuTimeFx,
  getOneMenuTimeFx,
  updateMenuTimeFx,
  deleteMenuTimeFx,
} from '../menuTimeModel/store';
import { MenuDto } from '../types';

describe('menu tests', () => {
  let item: MenuDto;
  let items: MenuDto[];
  let ramdomItem: MenuDto;

  beforeAll(async () => {
    item = menuFactory.build();
    resetMenuTime();
    resetMenuTimeList();
    items = await getAllMenuTimeFx();
    ramdomItem = items[faker.datatype.number(items.length)];
  });

  afterAll(() => {
    $menuTimeOne.off(resetMenuTime);
    $menuTimeList.off(resetMenuTimeList);
  });

  it('should create menu time', async () => {
    await createMenuTimeFx(item);

    // eslint-disable-next-line effector/no-getState
    expect($menuTimeOne.getState()).toStrictEqual(expect.objectContaining(item));
  });

  it('should get all menu time', async () => {
    await getAllMenuTimeFx();
    // eslint-disable-next-line effector/no-getState
    const { records } = $menuTimeList.getState();

    expect(Array.isArray(records)).toBeTruthy();
    const found = records.find((v) => v.name === item.name);
    expect(found).toBeTruthy();
  });

  it('should get one menu time', async () => {
    random.menuItem && (await getOneMenuTimeFx(random.menuItem));
    // eslint-disable-next-line effector/no-getState
    const one = $menuTimeOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(item));
  });

  it('should update menu time', async () => {
    const description = faker.datatype.uuid();
    random.menuItem && (await updateMenuTimeFx({ ...random, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuTimeOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu time', async () => {
    random.menuItem && (await deleteMenuTimeFx(random.menuItem));

    // eslint-disable-next-line effector/no-getState
    let one = $menuTimeOne.getState();
    expect(one).toBeNull();

    random.menuItem && (await getOneMenuTimeFx(random.menuItem));

    // eslint-disable-next-line effector/no-getState
    one = $menuTimeOne.getState();
    expect(one).toBeNull();
  });
});
