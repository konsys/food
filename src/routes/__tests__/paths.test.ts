import { getRouteByPath } from '../paths';

describe('name of the group', () => {
  it('should getRouteByPath', () => {
    expect(getRouteByPath('/menu')).toStrictEqual({ path: '/menu', name: 'Меню' });
    expect(getRouteByPath('/contacts')).toStrictEqual({ path: '/contacts', name: 'Контакты' });
    expect(getRouteByPath('/login')).toStrictEqual({ path: '/login', name: 'Войти' });
    expect(getRouteByPath('/not_found')).toStrictEqual({ path: '/not_found', name: 'Не найдено' });
    expect(getRouteByPath('/')).toStrictEqual({ path: '/', name: 'Главная' });
  });
});
