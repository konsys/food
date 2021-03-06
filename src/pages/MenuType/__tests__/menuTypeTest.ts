import faker from 'faker';
import { menuTypeFactory } from '../model/menuTypeFactory';
import { CrudStore } from '../../../common/models/abstractModel/abstractCrudModel';
import { MenuTypeDto } from '../model/types';

const model = new CrudStore<MenuTypeDto>('/menu-type');

const {
  createFx,
  resetList,
  resetOne,
  $listStore,
  $itemStore,
  getAllFx,
  updateFx,
  getOneFx,
  deleteFx,
} = model.createCrudStore();

describe('menu type test', () => {
  let newItem: MenuTypeDto;
  let allItems: MenuTypeDto[];
  let randomItem: MenuTypeDto;

  beforeAll(async () => {
    for (let i = 0; i < 20; i++) {
      newItem = menuTypeFactory.build();
      await createFx(newItem);
    }
  });

  beforeEach(async () => {
    newItem = menuTypeFactory.build();
    resetOne();
    resetList();
    allItems = (await getAllFx({ limit: 40, page: 1 })).items;
    randomItem = allItems[faker.datatype.number(allItems.length)];
  });

  afterAll(() => {
    $itemStore.off(resetOne);
    $listStore.off(resetList);
  });

  it('should create menu type', async () => {
    await createFx(newItem);

    // eslint-disable-next-line effector/no-getState
    expect($itemStore.getState()).toStrictEqual(expect.objectContaining(newItem));
  });

  it('should get limit menu type', async () => {
    const limit = 7;
    const page = 1;
    await getAllFx({
      limit,
      page,
    });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();
    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get all menu type', async () => {
    const limit = 4;
    await getAllFx({ limit, page: 1 });
    // eslint-disable-next-line effector/no-getState
    const { items } = $listStore.getState();

    expect(Array.isArray(items)).toBeTruthy();
    expect(items).toHaveLength(limit);
  });

  it('should get one menu type', async () => {
    randomItem.id && (await getOneFx(randomItem.id));
    // eslint-disable-next-line effector/no-getState
    const item = $itemStore.getState();
    expect(item).toStrictEqual(expect.objectContaining(randomItem));
  });

  it('should update menu type', async () => {
    const description = faker.datatype.uuid();
    randomItem.id && (await updateFx({ ...randomItem, description }));

    // eslint-disable-next-line effector/no-getState
    const one = $itemStore.getState();
    expect(one?.item.description).toStrictEqual(description);
  });

  it('should delete menu type', async () => {
    await createFx(newItem);
    const item = $itemStore.getState();
    item?.item?.id && (await deleteFx(item.item.id));

    // eslint-disable-next-line effector/no-getState
    let one = $itemStore.getState();
    expect(one).toBeNull();

    item?.item?.id && (await getOneFx(item.item.id));

    // eslint-disable-next-line effector/no-getState
    one = $itemStore.getState();
    expect(one).toBeNull();
  });
});
