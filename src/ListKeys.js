import React, { useState } from "react";

const ListKeys = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Alain", checked: true },
    { id: 2, name: "Hirwa", checked: false },
    { id: 3, name: "Fabrice", checked: true },
  ]);
  return <main></main>;
};

export default ListKeys;
