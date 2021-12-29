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
import { TMenuType } from '../menuTypeModel/types';
import { menuTypeFactory } from '../menuTypeModel/menuTypeFactory';

describe('menu type test', () => {
  let mt: TMenuType;
  let mts: TMenuType[];
  let random: TMenuType;

  beforeAll(async () => {
    mt = menuTypeFactory.build();
    resetMenuType();
    resetMenuTypeList();
    mts = await getAllMenuTypeFx();
    random = mts[faker.datatype.number(mts.length)];
  });

  afterAll(() => {
    $menuTypeOne.off(resetMenuType);
    $menuTypeList.off(resetMenuTypeList);
  });

  it('should create menu type', async () => {
    await createMenuTypeFx(mt);

    // eslint-disable-next-line effector/no-getState
    expect($menuTypeOne.getState()).toStrictEqual(expect.objectContaining(mt));
  });

  it('should get all menu type', async () => {
    await getAllMenuTypeFx();
    // eslint-disable-next-line effector/no-getState
    const { records } = $menuTypeList.getState();

    expect(Array.isArray(records)).toBeTruthy();
    const found = records.find((v) => v.name === mt.name);
    expect(found).toBeTruthy();
  });

  it('should get one menu type', async () => {
    random.menuTypeId && (await getOneMenuTypeFx(random.menuTypeId));
    // eslint-disable-next-line effector/no-getState
    const one = $menuTypeOne.getState();
    expect(one).toStrictEqual(expect.objectContaining(mt));
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
