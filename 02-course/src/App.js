import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ListKeys from "./ListKeys";
import { AddItems } from "./AddItems";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";
function App() {
  const APi_URL = "http://localhost:3500/items";
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ShoppingList")) || []
  );

  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();
  const [fetchError, setFecthError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(APi_URL);
        if (!response.ok) throw Error("didn't receive expected data ");
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        setFecthError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);
  const handleChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    const myItem = updatedItems.filter((item) => item.id === id);
    const updateItem = {
      method: "PATCH",
      "content-type": "application/json",
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqURL = `${APi_URL}/${id}`;
    const result = apiRequest(reqURL, updateItem);
    if (result) setFecthError(result);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addItem = async () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    const updatedItems = [...items, myNewItem];
    setItems(updatedItems);

    const postOptions = {
      method: "POST",
      header: {
        " content-type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(APi_URL, postOptions);
    if (result) setFecthError(result);
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && !isLoading && (
          <p style={{ color: "red" }}>{`Error:${fetchError}`}</p>
        )}
        <ListKeys
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleChange={handleChange}
          handleDelete={handleDelete}
          fetchError={fetchError}
        />
      </main>

      <Footer items={items} length={items.length} />
    </div>
  );
}

export default App;
