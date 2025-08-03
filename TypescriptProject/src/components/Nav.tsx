import React from "react";
type propsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const Nav = ({ viewCart, setViewCart }: propsType) => {
  const botton = viewCart ? (
    <button onClick={() => setViewCart(false)}> View Product</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View Cart</button>
  );

  const content = <nav className="nav">{botton}</nav>;
  return  content ;
};

export default Nav;
