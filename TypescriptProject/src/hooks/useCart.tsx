import type { UseCartContexttype } from "../Context/CardProvider";
import { CartContext } from "../Context/CardProvider";
import { useContext } from "react";
const useCart = (): UseCartContexttype => {
  return useContext(CartContext);
};

export default useCart;
