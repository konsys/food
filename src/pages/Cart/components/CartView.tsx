import React, { memo } from 'react';
import { THttpResponseError, TNullableItem } from '../../../common/api/types';
import { TVoidFn } from '../../../common/types';
import { Nullable } from '../../../core/types';
import { CartDto } from '../../../modules/cart/types';
import CartComponent from './MobileCart/CartComponent/CartComponent';

interface Props {
  cartOrder: TNullableItem<CartDto>;
  stickyClass: string;
  changeQuantity: (delta: number) => void;
  deleteFromCart: TVoidFn<string>;
  error: Nullable<THttpResponseError>;
  sideView?: boolean;
}

function CartView(props: Props) {
  const {
    sideView,
    cartOrder,
    stickyClass,
    changeQuantity,
    deleteFromCart,
    error,
  } = props;

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
            {error ? <div>{JSON.stringify(error)}</div> : ''}
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
