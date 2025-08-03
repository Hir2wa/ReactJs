import React from "react";
type propsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const Nav = ({ viewCart, setViewCart }: propsType) => {
  return <div>Nav</div>;
};

export default Nav;
