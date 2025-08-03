import React from "react";
import Nav from "./Nav";
import useCart from "../hooks/useCart";
type propsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ viewCart, setViewCart }: propsType) => {
  const { TotalItems, TotalPrice } = useCart();
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header___price-box">
          <p>Total Items: {TotalItems}</p>
          <p>Total Price: {TotalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return content;
};

export default Header;
