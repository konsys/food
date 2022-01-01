import { menuTimeFactory } from '../menuTimeModel/menuTimeFactory';
import {
  $menuTimeOne,
  $menuTimeList,
  createMenuTimeFx,
  deleteMenuTimeFx,
  getOneMenuTimeFx,
  resetMenuTime,
  resetMenuTimeList,
  updateMenuTimeFx,
  getAllMenuTimeFx,
} from '../menuTimeModel/store';
import faker from 'faker';
import { MenuTimeDto } from '../menuTimeModel/types';

describe('menu time test', () => {
  let item: MenuTimeDto;
  let items: MenuTimeDto[];
  let randomItem: MenuTimeDto;

  beforeAll(async () => {
    item = menuTimeFactory.build();
    resetMenuTime();
    resetMenuTimeList();
    items = (
      await getAllMenuTimeFx({
        limit: 4,
        page: 1,
      })
    ).items;
    randomItem = items[faker.datatype.number(items.length)];
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
    const limit = 3;
    await getAllMenuTimeFx({
      limit,
      page: 1,
    });
    // eslint-disable-next-line effector/no-getState
    const { items } = $menuTimeList.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get one menu time', async () => {
    randomItem.menuTimeId && (await getOneMenuTimeFx(randomItem.menuTimeId));
    // randomItem-disable-next-line effector/no-getState
    const one = $menuTimeOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(item));
  });

  it('should update menu time', async () => {
    const description = faker.datatype.uuid();
    randomItem.menuTimeId && (await updateMenuTimeFx({ ...randomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuTimeOne.getState();
    expect(one?.description).toStrictEqual(description);
  });

  it('should delete menu time', async () => {
    randomItem.menuTimeId && (await deleteMenuTimeFx(randomItem.menuTimeId));

    // eslint-disable-next-line effector/no-getState
    let one = $menuTimeOne.getState();
    expect(one).toBeNull();

    randomItem.menuTimeId && (await getOneMenuTimeFx(randomItem.menuTimeId));

    // eslint-disable-next-line effector/no-getState
    one = $menuTimeOne.getState();
    expect(one).toBeNull();
  });
});
