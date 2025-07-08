// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ListKeys from "./ListKeys";
import { AddItems } from "./AddItems";
function App() {
  const [items, setItems] = useState([
    { id: 1, item: "shoes", checked: true },
    { id: 2, item: "t-shirt", checked: false },
    { id: 3, item: "jacket", checked: true },
  ]);

  const [newItem, setNewItem] = useState("");

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
  const handleDelete = (id) => {
    const listItems = items.filter((items) => items.id !== id);
    setItems(listItems);
    localStorage.setItem("Item-List", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    console.log("submitted succefully");
  };

  return (
    <div className="App">
      <Header title="Grocery List " />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      {/* <Content /> */}
      <ListKeys
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer items={items} length={items.length} />
    </div>
  );
}

export default App;
