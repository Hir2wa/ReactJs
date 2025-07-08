import React, { useState } from "react";

const ListKeys = () => {
  const [items, setItems] = useState([
    { id: 1, item: "shoes", checked: true },
    { id: 2, item: "t-shirt", checked: false },
    { id: 3, item: "jacket", checked: true },
  ]);
  return (
    <main>
      {items.map((item) => (
        <li className="Items">
          <input type="checkbox" checked={item.checked}></input>
          <label>{item.item}</label>
          <button>Delete</button>
        </li>
      ))}
    </main>
  );
};

export default ListKeys;
