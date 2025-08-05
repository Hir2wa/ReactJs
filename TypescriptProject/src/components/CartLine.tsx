import React from "react";
import type { CartItemType } from "../Context/CardProvider";
import type { ReducerAction } from "../Context/CardProvider";
import type { ReducerActionType } from "../Context/CardProvider";

type typeProps = {
  item: CartItemType;
  dispatch: React.Dispatch<React.SetStateAction<boolean>>;
  REDUCER_ACTIONS: ReducerAction;
};
const CartLine = () => {
  return <div>CartLineComponent</div>;
};

export default CartLine;
