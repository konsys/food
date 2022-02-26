import { TItemWithUuid, TUuid } from '../../common/types';
import { Nullable } from '../../core/types';
import { CartModel } from '../../store';
import { getClientUuid } from './service';
import { CartDto, TOrder, EOrderStatus } from './types';

const { createItemFx, updateItemFx } = CartModel;

export const addToCart = (item: Nullable<TItemWithUuid<CartDto>>, restaurantMenuUuid: TUuid) => {
  let newOrder: CartDto;
  let order: TOrder[];
  if (item) {
    const existedItem = item.order.find((v) => v.restaurantMenuUuid === restaurantMenuUuid);
    const filteredOrder = item.order.filter((v) => v.restaurantMenuUuid !== restaurantMenuUuid);
    if (existedItem) {
      order = [
        ...filteredOrder,
        {
          quantity: existedItem.quantity + 1,
          restaurantMenuUuid,
        },
      ];
    } else {
      order = [...filteredOrder, { quantity: 1, restaurantMenuUuid }];
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
          restaurantMenuUuid,
          quantity: 1,
        },
      ],
      status: EOrderStatus.IN_PROGRESS,
      uuid: getClientUuid(),
    });
  }
};
