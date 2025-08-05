import React from "react";
import type { CartItemType } from "../Context/CardProvider";
import type { ReducerAction } from "../Context/CardProvider";
import type { ReducerActionType } from "../Context/CardProvider";

type typeProps = {
  item: CartItemType;
  dispatch: React.Dispatch<React.SetStateAction<boolean>>;
  REDUCER_ACTIONS: ReducerActionType;
};
const CartLine = ({ item, dispatch, REDUCER_ACTIONS }: typeProps) => {
  const images: string = item?.sku
    ? new URL(`../images/${item.sku}.jpg`, import.meta.url).href
    : "/images/fallback.jpg"; // default fallback

  return <div>CartLineComponent</div>;
};

export default CartLine;
