import { getRouteByPath } from '../paths';

describe('name of the group', () => {
  it('should getRouteByPath', () => {
    expect(getRouteByPath('/not_found')).toStrictEqual({ path: '/not_found', name: 'Не найдено' });
    expect(getRouteByPath('/')).toStrictEqual({ path: '/', name: 'Главная' });
  });
});
