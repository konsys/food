import { menuTimeFactory } from '../menuTimeModel/menuTimeFactory';
import {
  $menuTimeOne,
  $menuTimeList,
  createMenuTimeFx,
  deleteMenuTimeFx,
  getAllMenuTimeFx,
  getOneMenuTimeFx,
  resetMenuTime,
  resetMenuTimeList,
  updateMenuTimeFx,
} from '../menuTimeModel/store';
import faker from 'faker';
import { MenuTimeDto } from '../menuTimeModel/types';

describe('menu time test', () => {
  let item: MenuTimeDto;
  let items: MenuTimeDto[];
  let random: MenuTimeDto;

  beforeAll(async () => {
    item = menuTimeFactory.build();
    resetMenuTime();
    resetMenuTimeList();
    items = (await getAllMenuTimeFx()).items;
    random = items[faker.datatype.number(items.length)];
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
    const { items } = $menuTimeList.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items.length).toBeGreaterThan(0);
  });

  it('should get one menu time', async () => {
    random.menuTimeId && (await getOneMenuTimeFx(random.menuTimeId));
    // eslint-disable-next-line effector/no-getState
    const one = $menuTimeOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(item));
  });

  it('should update menu time', async () => {
    const description = faker.datatype.uuid();
    random.menuTimeId && (await updateMenuTimeFx({ ...random, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuTimeOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu time', async () => {
    random.menuTimeId && (await deleteMenuTimeFx(random.menuTimeId));

    // eslint-disable-next-line effector/no-getState
    let one = $menuTimeOne.getState();
    expect(one).toBeNull();

    random.menuTimeId && (await getOneMenuTimeFx(random.menuTimeId));

    // eslint-disable-next-line effector/no-getState
    one = $menuTimeOne.getState();
    expect(one).toBeNull();
  });
});
