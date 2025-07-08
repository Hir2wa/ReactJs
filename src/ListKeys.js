import React, { useState } from "react";

const ListKeys = () => {
  const [items, setItems] = useState([
    { id: 1, item: "shoes", checked: true },
    { id: 2, item: "t-shirt", checked: false },
    { id: 3, item: "jacket", checked: true },
  ]);

  const handleChange = (id) => {
    console.log(id);
  };
  return (
    <main>
      {items.map((item) => (
        <li className="Items">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleChange(item.id)}
          ></input>
          <label>{item.item}</label>
          <button>Delete</button>
        </li>
      ))}
    </main>
  );
};

export default ListKeys;
