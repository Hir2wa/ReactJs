import React from "react";
import useCart from "../hooks/useCart";

type propsType = {
  viewCart: boolean;
};
const Footer = ({ viewCart }: propsType) => {
  const { TotalItems, TotalPrice } = useCart();
  const year: number = new Date().getFullYear();
  const pageContent = viewCart ? (
    <p>Shopping cart &copy; {year}</p>
  ) : (
    <>
      <p> Total Item : {TotalItems}</p>
      <p> Total Price: {TotalPrice}</p>
      <p> Shopping Cart &copy; {year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;
  return content;
};

export default Footer;
