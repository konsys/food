import { TItemWithUuid } from '../../common/types';
import { Nullable } from '../../core/types';
import { CartModel } from '../../store';
import { EOrderStatus } from '../order/types';
import { RestaurantMenuDto } from '../restaurantMenu/types';
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
    update(item, 0);
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
    };
    updateItemFx(newOrder);
  } else {
    const order = [
      {
        restaurantMenu,
        quantity: 1,
        id: 0,
      },
    ];

    createItemFx({
      restaurantUuid: restaurantMenu.restaurant?.uuid,
      description: '',
      orderSum: sumAll(order),
      order,
      status: EOrderStatus.IN_PROGRESS,
      uuid: getClientUuid(),
    });
  }
};

export const changeOrderQuantity = (
  cartOrder: Nullable<TItemWithUuid<CartDto>>,
  delta: number
) => {
  if (cartOrder) {
    update(cartOrder, delta);
  }
};

const update = (cartOrder: TItemWithUuid<CartDto>, delta: number) => {
  const existedItem = cartOrder.order.find((v) => v.restaurantMenu.uuid === cartOrder.uuid);
  const filteredOrder = cartOrder.order.filter((v) => v.restaurantMenu.uuid !== cartOrder.uuid);
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

export const deleteItemFromCart = (cartOrder: Nullable<TItemWithUuid<CartDto>>) => {
  if (cartOrder) {
    const filteredOrder = cartOrder.order.filter((v) => v.restaurantMenu.uuid !== cartOrder.uuid);
    updateItemFx({ ...cartOrder, orderSum: sumAll(filteredOrder), order: filteredOrder });
    if (!filteredOrder.length) {
      deleteItemFx(cartOrder.uuid);
    }
  }
};
