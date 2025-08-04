import React from "react";
import useCart from "../hooks/useCart";

type propsType = {
  viewCart: boolean;
};
const Footer = ({ viewCart }: propsType) => {
  const { TotalItems, TotalItems } = useCart();

  return <div>Footer</div>;
};

export default Footer;
