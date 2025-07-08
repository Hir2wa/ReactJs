import React from "react";

export const ItemList = () => {
  return (
    <ul>
      {items.length ? (
        items.map((item) => (
          <li className="Items" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChange(item.id)}
            ></input>
            <label>{item.item}</label>
            <FaTrashAlt
              role="button"
              tabIndex={"0"}
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))
      ) : (
        <p style={{ marginTop: "2rem" }}> your list is empty</p>
      )}
    </ul>
  );
};
