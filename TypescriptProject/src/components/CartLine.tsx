import React, { type ChangeEvent, type ReactElement } from "react";
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
  const onChangeqty = (e: ChangeEvent) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveFromCar = () =>
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  const content = (
    <li className="cart__item">
      <img src={images} alt={item.name} className="cart__img" />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price Per Item">
        {new Intl.NumberFormat("en-us", {
          style = "currency",
          currency = "USD",
        }).format(item.price)}
      </div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.qty}
        area-label="Item Quantity"
      ></select>
    </li>
  );

  return <div>CartLineComponent</div>;
};

export default CartLine;
