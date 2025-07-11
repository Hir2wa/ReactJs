import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ListKeys from "./ListKeys";
import { AddItems } from "./AddItems";
import SearchItem from "./SearchItem";
function App() {
  const APi_URL = "http://localhost:3500/items";
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ShoppingList")) || []
  );

  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();

  useEffect(async () => {
    const fetchItems = async () => {
      const response = await fetch(APi_URL);
      const data = response.json();
    };
  }, []);
  const handleChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    const updatedItems = [...items, myNewItem];
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem();
    setNewItem("");
  };

  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header title="Grocery List " />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <ListKeys
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer items={items} length={items.length} />
    </div>
  );
}

export default App;
