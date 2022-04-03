import React, { memo } from 'react';
import { TNullableItem } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { CartDto } from '../../../modules/cart/types';
import CartComponent from './MobileCart/CartComponent/CartComponent';

interface Props {
  cartOrder: TNullableItem<CartDto>;
  stickyClass: string;
  changeQuantity: (uuid: string, delta: number) => void;
  deleteFromCart: TVoidFn<string>;
  sideView?: boolean;
}

function CartView(props: Props) {
  const { sideView, cartOrder, stickyClass, changeQuantity, deleteFromCart } =
    props;

  return (
    <div>
      {sideView ? (
        <div className={`cart-section-wrapper ${stickyClass}`}>
          <CartComponent
            cartOrder={cartOrder}
            changeQuantity={changeQuantity}
            deleteFromCart={deleteFromCart}
          />
        </div>
      ) : (
        <div className="container">
          <div className=" cart-section-wrapper ">
            <CartComponent
              cartOrder={cartOrder}
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
