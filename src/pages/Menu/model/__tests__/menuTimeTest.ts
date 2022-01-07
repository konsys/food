import { menuTimeFactory } from '../menuTimeModel/menuTimeFactory';
import faker from 'faker';
import { MenuTimeDto } from '../menuTimeModel/types';
import { createCrudStore } from '../../../../common/models/abstractModel/abstractCrudModel';

const {
  createFx,
  resetList,
  resetOne,
  $listStore,
  $oneStore,
  getAllFx,
  updateFx,
  getOneFx,
  deleteFx,
} = createCrudStore<MenuTimeDto>('/menu-time');

describe('menu time test', () => {
  let newItem: MenuTimeDto;
  let allItems: MenuTimeDto[];
  let randomItem: MenuTimeDto;

  beforeAll(async () => {
    for (let i = 0; i < 20; i++) {
      newItem = menuTimeFactory.build();
      await createFx(newItem);
    }
  });

  beforeEach(async () => {
    newItem = menuTimeFactory.build();
    resetOne();
    resetList();
    allItems = (
      await getAllFx({
        limit: 40,
        page: 1,
      })
    ).items;
    randomItem = allItems[faker.datatype.number(allItems.length)];
  });

  afterAll(() => {
    $oneStore.off(resetOne);
    $listStore.off(resetList);
  });

  it('should create menu time', async () => {
    await createFx(newItem);
    // eslint-disable-next-line effector/no-getState
    expect($oneStore.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it('should get all menu time', async () => {
    const limit = 3;
    await getAllFx({
      limit,
      page: 1,
    });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get one menu time', async () => {
    randomItem.menuTimeId && (await getOneFx(randomItem.menuTimeId));
    // randomItem-disable-next-line effector/no-getState
    const one = $oneStore.getState();
    expect(one).toStrictEqual(expect.objectContaining(randomItem));
  });

  it('should update menu time', async () => {
    const description = faker.datatype.uuid();
    randomItem.menuTimeId && (await updateFx({ ...randomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $oneStore.getState();
    expect(one?.description).toBe(description);
  });

  it('should delete menu time', async () => {
    await createFx(newItem);
    const item = $oneStore.getState();
    item?.menuTimeId && (await deleteFx(item.menuTimeId));

    // eslint-disable-next-line effector/no-getState
    let one = $oneStore.getState();
    expect(one).toBeNull();

    item?.menuTimeId && (await getOneFx(item.menuTimeId));

    // eslint-disable-next-line effector/no-getState
    one = $oneStore.getState();
    expect(one).toBeNull();
  });
});
