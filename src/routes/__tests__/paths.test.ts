import { getRouteByPath } from '../paths';

describe('name of the group', () => {
  it.skip('should getRouteByPath', () => {
    expect(getRouteByPath('/')).toStrictEqual({ path: '/', name: 'Главная' });
  });
});
