import { TItemWithUuid, TUuid } from '../../common/types';
import { Nullable } from '../../core/types';
import { CartModel } from '../../store';
import { RestaurantMenuDto } from '../restaurantMenu/types';
import { getClientUuid } from './service';
import { CartDto, TRestaurantMenuOrder, EOrderStatus } from './types';

const { createItemFx, updateItemFx } = CartModel;

export const addToCart = (
  item: Nullable<TItemWithUuid<CartDto>>,
  restaurantMenu: RestaurantMenuDto,
  restaurantUuid: TUuid
) => {
  let newOrder: CartDto;
  let order: TRestaurantMenuOrder[];
  if (item) {
    update(item, restaurantMenu.uuid, 0);
    const existedItem = item.order.find((v) => v.restaurantMenu.uuid === restaurantMenu.uuid);
    const filteredOrder = item.order.filter((v) => v.restaurantMenu.uuid !== restaurantMenu.uuid);
    if (existedItem) {
      order = [
        ...filteredOrder,
        {
          quantity: existedItem.quantity + 1,
          restaurantMenu,
          id: existedItem.id,
        },
      ].sort((a, b) => a.id - b.id);
    } else {
      const max = Math.max.apply(null, [...filteredOrder.map((v) => v.id)]);
      order = [...filteredOrder, { quantity: 1, restaurantMenu, id: max + 1 }];
    }
    newOrder = {
      ...item,
      order,
    };
    updateItemFx(newOrder);
  } else {
    createItemFx({
      restaurantUuid,
      description: '',
      id: null,
      order: [
        {
          restaurantMenu,
          quantity: 1,
          id: 0,
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
    update(cartOrder, uuid, delta);
  }
};

const update = (cartOrder: TItemWithUuid<CartDto>, uuid: TUuid, delta: number) => {
  const existedItem = cartOrder.order.find((v) => v.restaurantMenu.uuid === uuid);
  const filteredOrder = cartOrder.order.filter((v) => v.restaurantMenu.uuid !== uuid);
  let updatedOrder: TRestaurantMenuOrder[] = [];

  if (existedItem) {
    updatedOrder = [
      ...filteredOrder,
      {
        quantity: existedItem.quantity + delta,
        restaurantMenu: existedItem.restaurantMenu,
        id: existedItem.id,
      },
    ].sort((a, b) => a.id - b.id);

    const newOrder = {
      ...cartOrder,
      order: updatedOrder,
    };
    updateItemFx(newOrder);
  }
};

export const deleteItemFromCart = (cartOrder: Nullable<TItemWithUuid<CartDto>>, uuid: TUuid) => {
  if (cartOrder) {
    const filteredOrder = cartOrder.order.filter((v) => v.restaurantMenu.uuid !== uuid);
    updateItemFx({ ...cartOrder, order: filteredOrder });
  }
};
