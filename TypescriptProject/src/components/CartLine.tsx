import React, { type ReactElement } from "react";
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
  const lineTotal: number = item.price * item.qty;
  const hightqty: number = 20 > item.qty ? 20 : item.qty;
  const optionValues: number[] = [...Array(hightqty)].map((i) => i + 1);
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });
  return <div>CartLineComponent</div>;
};

export default CartLine;
