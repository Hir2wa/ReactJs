import React from "react";
import type { ReactElement } from "react";
import type { UseProductContextType } from "../Context/ProductsProvider";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";
import Products from "./Products";
const ProductsList = () => {
  const { dispach, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      let inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Products
          key={product.sku}
          product={product}
          dispach={dispach}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }
  return <div>Product</div>;
};

export default ProductsList;
