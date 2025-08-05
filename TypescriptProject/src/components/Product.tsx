import React, { type ReactElement } from "react";
import type { ReducerActionType } from "../Context/CardProvider";
import type { ProductType } from "../Context/ProductsProvider";
import type { ReducerAction } from "../Context/CardProvider";
import { PiTicketThin } from "react-icons/pi";

type propsType = {
  inCart: boolean;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  product: ProductType;
};
const Product = ({
  inCart,
  dispatch,
  REDUCER_ACTIONS,
  product,
}: propsType): ReactElement => {
  const images: string = product?.sku
    ? new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    : "/images/fallback.jpg"; // default fallback

  console.log(images);
  const addToCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, qty: 1 },
    });

  const itemInCart = inCart ? `✅ -> Item in cart : ➕ Add to cart` : null;
  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={images} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-Us", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}{" "}
        {itemInCart}
      </p>
      <button onClick={addToCart}></button>
    </article>
  );

  return content;
};

export default Product;
