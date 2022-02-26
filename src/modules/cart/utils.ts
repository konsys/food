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

export const changeOrderQuantity = (
  cartOrder: Nullable<TItemWithUuid<CartDto>>,
  uuid: TUuid,
  delta: number
) => {
  if (cartOrder) {
    const existedItem = cartOrder.order.find((v) => v.restaurantMenu.uuid === uuid);
    const filteredOrder = cartOrder.order.filter((v) => v.restaurantMenu.uuid !== uuid);
    let updatedOrder: TRestaurantMenuOrder[] = [];

    if (existedItem) {
      updatedOrder = [
        ...filteredOrder,
        {
          quantity: existedItem.quantity + delta,
          restaurantMenu: existedItem.restaurantMenu,
        },
      ];

      const newOrder = {
        ...cartOrder,
        order: updatedOrder,
      };
      updateItemFx(newOrder);
    }
  }
};
