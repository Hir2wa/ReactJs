import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const ListKeys = () => {
  const [items, setItems] = useState([
    { id: 1, item: "shoes", checked: true },
    { id: 2, item: "t-shirt", checked: false },
    { id: 3, item: "jacket", checked: true },
  ]);
  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setItems(listItems);
    localStorage.setItem("Item-List", JSON.stringify(listItems));
  };
  return (
    <main>
      {items.map((item) => (
        <li className="Items" key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleChange(item.id)}
          ></input>
          <label>{item.item}</label>
          <FaTrashAlt />
        </li>
      ))}
    </main>
  );
};

export default ListKeys;
