import React from "react";
type propsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ viewCart, setViewCart }: propsType) => {
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header___price-box">
          <p>Total Items:</p>
          <p>Total Price:</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
