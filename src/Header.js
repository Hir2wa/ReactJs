import React from "react";

const Header = (props) => {
  return (
    <header
      style={{
        backgroundColor: "mediumblue",
        color: "white",
      }}
    >
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
