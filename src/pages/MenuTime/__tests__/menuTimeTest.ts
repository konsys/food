import { menuTimeFactory } from '../menuTimeModel/menuTimeFactory';
import faker from 'faker';
import { MenuTimeDto } from '../menuTimeModel/types';
import { CrudStore } from '../../../common/models/abstractModel/abstractCrudModel';

const model = new CrudStore<MenuTimeDto>('/menu-time');

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
} = model.createCrudStore();

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
    randomItem.id && (await getOneFx(randomItem.id));
    // randomItem-disable-next-line effector/no-getState
    const one = $oneStore.getState();
    expect(one).toStrictEqual(expect.objectContaining(randomItem));
  });

  it('should update menu time', async () => {
    const description = faker.datatype.uuid();
    randomItem.id && (await updateFx({ ...randomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $oneStore.getState();
    expect(one?.item?.description).toBe(description);
  });

  it('should delete menu time', async () => {
    await createFx(newItem);
    const state = $oneStore.getState();
    state?.item?.id && (await deleteFx(state.item.id));

    // eslint-disable-next-line effector/no-getState
    let one = $oneStore.getState();
    expect(one.item).toBeNull();

    state?.item?.id && (await getOneFx(state?.item?.id));

    // eslint-disable-next-line effector/no-getState
    one = $oneStore.getState();
    expect(one.item).toBeNull();
  });
});
