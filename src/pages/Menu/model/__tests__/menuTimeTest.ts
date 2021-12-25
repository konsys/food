import { menuTimeFactory } from '../menuTimeFactory';
import {
  $menuTime,
  $menuTimeList,
  createMenuTimeFx,
  resetMenuTime,
  resetMenuTimeList,
} from '../store';

describe('menu time test', () => {
  beforeAll(() => {
    resetMenuTime();
    resetMenuTimeList();
  });

  afterAll(() => {
    $menuTime.off(resetMenuTime);
    $menuTimeList.off(resetMenuTimeList);
  });

  it('should create menu time', async () => {
    const mt = menuTimeFactory.build();
    await createMenuTimeFx(mt);

    // expect($menuTime.getState()?.description).toBe(mt.description);
    // eslint-disable-next-line effector/no-getState
    expect($menuTime.getState()).toStrictEqual(expect.objectContaining(mt));
  });
});
