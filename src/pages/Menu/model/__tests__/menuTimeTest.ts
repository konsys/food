import { menuTimeFactory } from '../menuTimeFactory';
import {
  $menuTime,
  $menuTimeList,
  createMenuTimeFx,
  getAllMenuTimeFx,
  getOneMenuTimeFx,
  resetMenuTime,
  resetMenuTimeList,
  updateMenuTimeFx,
} from '../store';
import faker from 'faker';
import { MenuTime } from '../types';

describe('menu time test', () => {
  let mt: MenuTime;
  let mts: MenuTime[];
  let random: MenuTime;

  beforeAll(async () => {
    mt = menuTimeFactory.build();
    resetMenuTime();
    resetMenuTimeList();
    mts = await getAllMenuTimeFx();
    random = mts[faker.datatype.number(mts.length)];
  });

  afterAll(() => {
    $menuTime.off(resetMenuTime);
    $menuTimeList.off(resetMenuTimeList);
  });

  it('should create menu time', async () => {
    await createMenuTimeFx(mt);

    // eslint-disable-next-line effector/no-getState
    expect($menuTime.getState()).toStrictEqual(expect.objectContaining(mt));
  });

  it('should get all menu time', async () => {
    await getAllMenuTimeFx();
    // eslint-disable-next-line effector/no-getState
    const list = $menuTimeList.getState();

    expect(Array.isArray(list)).toBeTruthy();
    const found = list.find((v) => v.name === mt.name);
    expect(found).toBeTruthy();
  });

  it('should get one menu time', async () => {
    random.menuTimeId && (await getOneMenuTimeFx(random.menuTimeId));
    // eslint-disable-next-line effector/no-getState
    const one = $menuTime.getState();
    expect(one).toStrictEqual(expect.objectContaining(mt));
  });

  it('should update one menu time', async () => {
    const description = faker.datatype.uuid();
    random.menuTimeId && (await updateMenuTimeFx({ ...random, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $menuTime.getState();
    expect(one?.description).toStrictEqual(description);
  });
});
