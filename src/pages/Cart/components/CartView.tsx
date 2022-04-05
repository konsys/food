import React, { memo } from 'react';
import { TItem } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { CartDto } from '../../../modules/cart/types';
import CartComponent from './MobileCart/CartComponent/CartComponent';

interface Props {
  cartItem: TItem<CartDto>;
  stickyClass: string;
  changeQuantity: (delta: number) => void;
  deleteFromCart: TVoidFn<string>;
  sideView?: boolean;
}

function CartView(props: Props) {
  const { sideView, cartItem, stickyClass, changeQuantity, deleteFromCart } =
    props;

  console.log(12312313, cartItem);
  return (
    <div>
      {sideView ? (
        <div className={`cart-section-wrapper ${stickyClass}`}>
          <CartComponent
            cartItem={cartItem}
            changeQuantity={changeQuantity}
            deleteFromCart={deleteFromCart}
          />
        </div>
      ) : (
        <div className="container">
          <div className=" cart-section-wrapper ">
            <CartComponent
              cartItem={cartItem}
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
