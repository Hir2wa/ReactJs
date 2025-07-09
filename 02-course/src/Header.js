import React from "react";

const Header = ({ title }) => {
  return (
    <header
      style={{
        backgroundColor: "mediumblue",
        color: "white",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Default Header",
};
export default Header;
