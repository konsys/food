import { TItemWithUuid, TUuid } from '../../common/types';
import { Nullable } from '../../core/types';
import { CartModel } from '../../store';
import { RestaurantMenuDto } from '../restaurantMenu/types';
import { getClientUuid } from './service';
import { CartDto, TRestaurantMenuOrder, EOrderStatus } from './types';

const { createItemFx, updateItemFx } = CartModel;

export const addToCart = (
  item: Nullable<TItemWithUuid<CartDto>>,
  restaurantMenu: RestaurantMenuDto
) => {
  let newOrder: CartDto;
  let order: TRestaurantMenuOrder[];
  if (item) {
    const existedItem = item.order.find((v) => v.restaurantMenu.uuid === restaurantMenu.uuid);
    const filteredOrder = item.order.filter((v) => v.restaurantMenu.uuid !== restaurantMenu.uuid);
    if (existedItem) {
      order = [
        ...filteredOrder,
        {
          quantity: existedItem.quantity + 1,
          restaurantMenu,
        },
      ];
    } else {
      order = [...filteredOrder, { quantity: 1, restaurantMenu }];
    }
    newOrder = {
      ...item,
      order,
    };
    updateItemFx(newOrder);
  } else {
    createItemFx({
      description: '',
      id: null,
      order: [
        {
          restaurantMenu,
          quantity: 1,
        },
      ],
      status: EOrderStatus.IN_PROGRESS,
      uuid: getClientUuid(),
    });
  }
};
