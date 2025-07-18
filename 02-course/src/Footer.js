import React from "react";

const Footer = ({ length, items }) => {
  const today = new Date();

  return (
    <footer>
      <p>
        {length} List {items.length === 1 ? "item" : "items"}
      </p>
      <p> Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
