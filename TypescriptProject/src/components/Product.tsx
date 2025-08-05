import React, { type ReactElement } from "react";
import type { ReducerActionType } from "../Context/CardProvider";
import type { ProductType } from "../Context/ProductsProvider";
import type { ReducerAction } from "../Context/CardProvider";

type propsType = {
  inCart: boolean;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  product: ProductType;
};
const Product = ({
  inCart,
  dispach,
  REDUCER_ACTIONS,
  product,
}: propsType): ReactElement => {
  const images: string = new URL(
    `../images/${product.sku}.jpg`,
    import.meta.url
  ).href;

  return <div>Products</div>;
};

export default Product;
