import React from "react";
import { FaPlus } from "react-icons/fa";
export const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add-Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </form>
  );
};
