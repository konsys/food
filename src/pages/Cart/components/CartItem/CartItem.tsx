import React, { memo } from 'react';
import { TUuid, TVoidFn } from '../../../../common/types';
import { NullableNumber } from '../../../../core/types';
import { RestaurantMenuDto } from '../../../../modules/restaurantMenu/types';
import { ReactComponent as DeleteButton } from './svg/deleteButton.svg';
import { ReactComponent as PlusButton } from './svg/plusButton.svg';
import { ReactComponent as MinusButton } from './svg/minusButton.svg';

export type TModidificator = {
  price: NullableNumber;
  key: string;
  value: string;
};
interface Props {
  modificators?: TModidificator[];
  item: RestaurantMenuDto;
  quiantity: number;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<TUuid>;
}

function CartItem(props: Props) {
  const { modificators, item, quiantity, changeQuantity, deleteFromCart } =
    props;

  return (
    <div className="cart-service">
      <div className="cart-service__title d-flex flex-wrap align-items-center">
        <button
          className="cart-service__delete-button"
          type="button"
          onClick={() => deleteFromCart(item.uuid)}
        >
          <DeleteButton />
        </button>
        <div className="cart-service__name">{item.name}</div>
        <div className="cart-service__description">{item.weight} г.</div>
      </div>
      <div className="cart-service__addons">
        {modificators?.map(({ key, value, price }) => {
          const priceAdd = price ? ` <strong> (+ ${price}₽)</strong>` : '';
          return `${key}: ${value} ${priceAdd}`;
        })}
        <br />
      </div>
      <div className="cart-service__bottom">
        <div className="cart-service__actions">
          <button
            className="cart-service__count-button cart-service__count-button--minus"
            disabled={quiantity < 2}
            type="button"
            onClick={() => changeQuantity(item.uuid, -1)}
          >
            <MinusButton />
          </button>
          <input type="text" value={quiantity} disabled />
          <button
            className="cart-service__count-button"
            type="button"
            onClick={() => changeQuantity(item.uuid, 1)}
          >
            <PlusButton />
          </button>
        </div>
        <div className="cart-service__price">
          <span>{item.price * quiantity}</span> ₽
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
