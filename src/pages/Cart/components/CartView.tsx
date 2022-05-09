import React, { memo } from 'react';
import { TItem } from '../../../common/api/types';
import { TUuid, TVoidFn } from '../../../common/types';
import { CartDto } from '../../../modules/cart/types';
import CartComponent from './MobileCart/CartComponent/CartComponent';

interface Props {
  cart: TItem<CartDto>;
  stickyClass: string;
  changeQuantity: (uuid: TUuid, delta: number) => void;
  deleteFromCart: TVoidFn<string>;
  sideView?: boolean;
}

function CartView(props: Props) {
  const { sideView, cart, stickyClass, changeQuantity, deleteFromCart } = props;

  return (
    <div>
      {sideView ? (
        <div className={`cart-section-wrapper ${stickyClass}`}>
          <CartComponent
            cart={cart}
            changeQuantity={changeQuantity}
            deleteFromCart={deleteFromCart}
          />
        </div>
      ) : (
        <div className="container">
          <div className=" cart-section-wrapper ">
            <CartComponent
              cart={cart}
              changeQuantity={changeQuantity}
              deleteFromCart={deleteFromCart}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(CartView);
