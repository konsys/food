import { TItemWithUuid, TUuid } from '../../common/types';
import { Nullable } from '../../core/types';
import { CartModel } from '../../store';
import { EOrderStatus } from '../order/types';
import { RestaurantMenuDto } from '../restaurantMenu/types';
import { RestaurantDto } from '../restaurants/types';
import { getClientUuid } from './service';
import { CartDto, TRestaurantMenuOrder } from './types';

const { createItemFx, updateItemFx, deleteItemFx } = CartModel;

const sumAll = (order: TRestaurantMenuOrder[]) =>
  order.reduce((acc, v) => acc + v.quantity * v.restaurantMenu.price, 0);

export const addToCart = (
  item: Nullable<TItemWithUuid<CartDto>>,
  restaurantMenu: RestaurantMenuDto,
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
      orderSum: sumAll(order),
      order,
      restaurantUuid: restaurantMenu.restaurantUuid
    };
    updateItemFx(newOrder);
  } else {
    const initialOrder = [
      {
        restaurantMenu,
        quantity: 1,
        id: 0,
      },
    ];

    createItemFx({
      restaurantUuid: restaurantMenu.restaurantUuid,
      description: '',
      orderSum: sumAll(initialOrder),
      order: initialOrder,
      status: EOrderStatus.IN_PROGRESS,
      uuid: getClientUuid(),
    });
  }
};

export const changeOrderQuantity = (
  cartOrder: Nullable<TItemWithUuid<CartDto>>,
  itemUuid: TUuid,
  delta: number
) => {
  if (cartOrder) {
    update(cartOrder, itemUuid, delta);
  }
};

const update = (cartOrder: TItemWithUuid<CartDto>, itemUuid: TUuid, delta: number) => {
  const existedItem = cartOrder.order.find((v) => v.restaurantMenu.uuid === itemUuid);
  const filteredOrder = cartOrder.order.filter((v) => v.restaurantMenu.uuid !== itemUuid);
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
      orderSum: sumAll(updatedOrder),
      order: updatedOrder,
    };
    updateItemFx(newOrder);
  }
};

export const deleteItemFromCart = (cartOrder: Nullable<TItemWithUuid<CartDto>>, itemUuid: TUuid) => {
  if (cartOrder) {
    const filteredOrder = cartOrder.order.filter((v) => v.restaurantMenu.uuid !== itemUuid);
    updateItemFx({ ...cartOrder, orderSum: sumAll(filteredOrder), order: filteredOrder });
    if (!filteredOrder.length) {
      deleteItemFx(cartOrder.uuid);
    }
  }
};
