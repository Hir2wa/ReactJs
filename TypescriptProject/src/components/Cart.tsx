import React from "react";
import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLine from "./CartLine";
const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, cart, TotalItems, TotalPrice } = useCart();
  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const content = confirm ? (
    <h2>Thank You For Your Order....</h2>
  ) : (
    <>
      <h2 className="offscreen">cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return (
            <CartLine
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>

      <div className="cart__totals"></div>
    </>
  );
  return <div>Cart</div>;
};

export default Cart;
