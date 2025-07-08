import React from "react";
import { FaTrashAlt } from "react-icons/fa";
export const AddItems = () => {
  return (
    <form>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add-Item"
        required
      ></input>
    </form>
  );
};
