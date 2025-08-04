import React from "react";
import type { UseProductContextType } from "../Context/ProductsProvider";
import { ProductsContext } from "../Context/ProductsProvider";
import { useContext } from "react";
const useProducts = (): UseProductContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
